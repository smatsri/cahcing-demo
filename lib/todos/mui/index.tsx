import PriorityCache from "@/lib/caching/PriorityCache";
import { getTodos } from "../api";
import { CacheProvider } from "@emotion/react";
import { cache as emotionCache, extractCritical } from "../../emotion";
import MuiTodoItem from "@/components/MuiTodoItem";
import { Todo } from "../types";

const cache = new PriorityCache(1000, 1000 * 60 * 5);

export const renderTodo = async (todo: Todo) => {
  const ReactDOMServer = (await import("react-dom/server")).default;
  const fullHtml = ReactDOMServer.renderToString(
    <CacheProvider value={emotionCache}>
      <MuiTodoItem todo={todo} />
    </CacheProvider>
  );
  const { html } = extractCritical(fullHtml);
  return html;
};

let loaded = false;

export const loadData = async (length = 20, offset = 100) => {
  if (!loaded) {
    const todos = await getTodos(length, offset);
    const htmlsPromises = todos.map(async (todo) => ({
      key: todo.id.toString(),
      value: await renderTodo(todo),
    }));
    const items = await Promise.all(htmlsPromises);
    cache.addMany(items);
    loaded = true;
  }
};

export const getTodoHtml = (id: number) => {
  const html = cache.getItem(id.toString());
  return html;
};
