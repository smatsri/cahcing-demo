const getTodo = async (id: number) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  const todo: Todo = await response.json()
  return todo
}