import { getTodos } from "./api";
import { cache } from "./cache";
import { renderTodo } from "./render";

export const loadData = async (size = 20) => {
  if (!cache.keyExists("1")) {
    const todos = await getTodos(size);
    const htmlsPromises = todos.map(async (todo) => ({
      key: todo.id.toString(),
      value: await renderTodo(todo),
    }));
    const items = await Promise.all(htmlsPromises)
    cache.addMany(items);
  } else {

  }

}