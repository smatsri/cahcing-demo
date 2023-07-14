import { getTodoHtml } from "@/lib/todos/html";
import TodoItem from "./TodoItem";

type TodoItemWrapperProps = {
  id: number;
};

const TodoItemWrapper = ({ id }: TodoItemWrapperProps) => {
  if (typeof window === "undefined") {
    const html = getTodoHtml(id);
    return <div id="my-comp" dangerouslySetInnerHTML={{ __html: html }}></div>;
  }

  return (
    <div id="my-comp">
      <TodoItem
        todo={{ id: 1, userId: 1, completed: false, title: "first task" }}
      />
    </div>
  );
};

export default TodoItemWrapper;
