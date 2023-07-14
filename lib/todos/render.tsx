import { Todo } from "./types";
import TodoItem from "../../components/TodoItem";

export const renderTodo = async (todo: Todo) => {
  const ReactDOMServer = (await import("react-dom/server")).default;
  return ReactDOMServer.renderToString(<TodoItem todo={todo} />);
};
