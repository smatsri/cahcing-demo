import { Todo } from "./types";
import TodoItem from "../../components/TodoItem";
import { CacheProvider } from "@emotion/react";
import { cache, extractCritical } from "./emotion";

export const renderTodo = async (todo: Todo) => {
  const ReactDOMServer = (await import("react-dom/server")).default;
  const fullHtml = ReactDOMServer.renderToString(
    <CacheProvider value={cache}>
      <TodoItem todo={todo} />
    </CacheProvider>
  );
  const { html, css, ids } = extractCritical(fullHtml);
  return html;
};
