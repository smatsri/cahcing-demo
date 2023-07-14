import PriorityCache from "../caching/PriorityCache";
import logger from "../utils/logger";
import { getTodo } from "./api";
import { cache } from "./cache";
import { renderTodo } from "./render";

const getTodos = async (size: number) => {
  const promises = [];
  for (let index = 0; index < size; index++) {
    let promise = getTodo(index + 1);
    promises.push(promise);
  }

  const result = await Promise.all(promises);
  return result;
};

export const loadData = async (size = 20) => {
  if (!cache.keyExists("1")) {
    logger.info('loading todos data from api')
    const todos = await getTodos(size);
    logger.info('rendering items')
    const htmlsPromises = todos.map(async (todo) => ({
      key: todo.id.toString(),
      value: await renderTodo(todo),
    }));
    const items = await Promise.all(htmlsPromises)
    logger.info('added todos to cache')
    cache.addMany(items);
  }

}