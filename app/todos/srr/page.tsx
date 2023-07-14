import TodoItem from "@/app/components/TodoItem";
import { getTodos } from "@/lib/todos/api";

export const revalidate = 0;

export default async function SRR() {
  const todos = await getTodos(100);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
