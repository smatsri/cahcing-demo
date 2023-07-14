import { getTodoHtml } from "@/lib/todos/html";
import TodoItem from "./TodoItem";
import logger from "@/lib/utils/logger";

type TodoItemWrapperProps = {
  id: number;
};

const TodoItemWrapper = async ({ id }: TodoItemWrapperProps) => {
  if (typeof window === "undefined") {
    const html = getTodoHtml(id);
    logger.log(`TodoItemWrapper`, html);
    return (
      <div
        id="my-comp"
        dangerouslySetInnerHTML={{ __html: html || "<div>123</div>" }}
      ></div>
    );
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
