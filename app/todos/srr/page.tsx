import TodoItem from "@/app/components/TodoItem";
import { getTodos } from "@/lib/todos/api";

export default async function SRR() {
  const todos = await getTodos(20);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
