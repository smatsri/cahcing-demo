import TodoItem from "@/app/components/TodoItem";
import { getTodos } from "@/lib/todos/api";

function shuffleArray(array: any[]) {
  return array.sort(function () {
    return Math.random() - 0.5;
  });
}

export const revalidate = 0;

export default async function SRR() {
  const todos = await getTodos(100);
  shuffleArray(todos);
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
