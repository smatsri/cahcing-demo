import { Todo } from "@/lib/todos/types";
import styled from "@emotion/styled";

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
    <Root key={id}>
      <script dangerouslySetInnerHTML={{ __html: scriptContent }}></script>
      <Title>{title}</Title>
      <Status>status:{completed ? "completed" : "pending"}</Status>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
`;
const Title = styled.h2`
  font-size: 1.4em;
`;
const Status = styled.div`
  font-size: 1.2em;
`;

export default TodoItem;
