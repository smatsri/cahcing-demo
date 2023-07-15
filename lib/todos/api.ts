import { Todo } from "./types"

export const getTodo = async (id: number) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    next: { revalidate: 1000 * 60 }
  })
  const todo: Todo = await response.json()
  return todo
}

export const getTodos = async (length: number, offset = 0) => {
  const promises = [];
  for (let index = 0; index < length; index++) {
    let promise = getTodo(index + offset + 1);
    promises.push(promise);
  }

  const result = await Promise.all(promises);
  return result;
};