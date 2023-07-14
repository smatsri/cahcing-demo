import { getTodo } from "./api";
import { cache } from "./cache";
import { renderTodo } from "./render";
import logger from "../utils/logger";

const getTodos = async (size: number) => {
  const promises = [];
  for (let index = 0; index < size; index++) {
    let promise = getTodo(index + 1);
    promises.push(promise);
  }

  const result = await Promise.all(promises);
  return result;
};

export const initTodos = async () => {
  try {
    logger.info("Initializing todos...");
    const todos = await getTodos(4);
    logger.info("Todos fetched successfully.");

    const htmls = todos.map((todo) => ({
      key: todo.id.toString(),
      value: renderTodo(todo),
    }));

    cache.addMany(htmls);
    logger.info("Todos added to cache.");

    logger.info("Todos Initialization completed.");
    return true;
  } catch (error) {
    logger.error("Error occurred during initialization:", error);
    return false;
  }
};
