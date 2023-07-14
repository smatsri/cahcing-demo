import { Todo } from "./types"

export const getTodo = async (id: number) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    next: { revalidate: 1000 * 60 }
  })
  const todo: Todo = await response.json()
  return todo
}

export const getTodos = async (size: number) => {
  const promises = [];
  for (let index = 0; index < size; index++) {
    let promise = getTodo(index + 1);
    promises.push(promise);
  }

  const result = await Promise.all(promises);
  return result;
};