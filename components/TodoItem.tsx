import { Todo } from "@/lib/todos/types";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

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
      <Status>{completed ? "completed" : "pending"}</Status>
      <Btn>Click</Btn>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px;
`;
const Title = styled.h2`
  font-size: 1.6em;
  text-transform: capitalize;
`;
const Status = styled.div`
  font-size: 1.2em;
`;

const Btn = styled(Button)``;

export default TodoItem;
