import { Todo } from "@/lib/todos/types";

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo: { id, title, completed } }: TodoItemProps) => {
  const scriptContent = `var todo_${id} = ${JSON.stringify({
    id,
    title,
    completed,
  })};`;

  return (
    <div key={id}>
      <script dangerouslySetInnerHTML={{ __html: scriptContent }}></script>
      <h2>{title}</h2>
      <div>status: {completed ? "completed" : "pending"}</div>
    </div>
  );
};

export default TodoItem;
