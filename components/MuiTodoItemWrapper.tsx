import { getTodoHtml } from "@/lib/todos/mui";
import MuiTodoItem from "./MuiTodoItem";

type MuiTodoItemWrapperProps = {
  id: number;
};

const MuiTodoItemWrapper = ({ id }: MuiTodoItemWrapperProps) => {
  if (typeof window === "undefined") {
    const html = getTodoHtml(id);
    return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
  }

  const todo = (window as any)["MuiTodoItem_" + id];

  return (
    <div>
      <MuiTodoItem todo={todo} />
    </div>
  );
};

export default MuiTodoItemWrapper;
