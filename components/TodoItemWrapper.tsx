import { getTodoHtml } from "@/lib/todos/html";
import TodoItem from "./TodoItem";

type TodoItemWrapperProps = {
  id: number;
};

const TodoItemWrapper = ({ id }: TodoItemWrapperProps) => {
  if (typeof window === "undefined") {
    const html = getTodoHtml(id);
    return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
  }

  const todo = (window as any)["todo_" + id];

  return (
    <div>
      <TodoItem todo={todo} />
    </div>
  );
};

export default TodoItemWrapper;
