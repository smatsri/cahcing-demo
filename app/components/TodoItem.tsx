import { Todo } from "@/lib/todos/types";

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo: { id, title, completed } }: TodoItemProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>status: {completed ? "completed" : "pending"}</div>
    </div>
  );
};

export default TodoItem;
