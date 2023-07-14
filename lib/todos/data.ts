import { getTodos } from "./api";
import { cache } from "./cache";
import { renderTodo } from "./render";

(cache as any)._id = "todo_cache";


if (!(global as any).id) {
  (global as any).id = Date.now();
  console.log('id is not set');
} else {
  console.log('id is set');
}

export const loadData = async (size = 20) => {
  console.log('all keys', cache.allKeys());
  if (!cache.keyExists("1")) {
    console.info('loading todos data from api')
    const todos = await getTodos(size);
    console.info('rendering items')
    const htmlsPromises = todos.map(async (todo) => ({
      key: todo.id.toString(),
      value: await renderTodo(todo),
    }));
    const items = await Promise.all(htmlsPromises)
    console.info('added todos to cache')
    cache.addMany(items);
    const a = cache.keyExists("1")
    console.info('cache loaded: ' + a)
    console.info((cache as any)._id)

  } else {
    console.info('data already loaded');
  }

}