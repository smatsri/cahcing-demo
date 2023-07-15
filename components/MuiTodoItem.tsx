import { Todo } from "@/lib/todos/types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

type MuiTodoItemProps = {
  todo: Todo;
};

const MuiTodoItem = ({ todo: { id, title, completed } }: MuiTodoItemProps) => {
  const scriptContent = `var MuiTodoItem_${id} = ${JSON.stringify({
    id,
    title,
    completed,
  })};`;

  return (
    <Box>
      <script dangerouslySetInnerHTML={{ __html: scriptContent }}></script>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="subtitle1">
        {completed ? "completed" : "pending"}
      </Typography>
      <Button>Click</Button>
    </Box>
  );
};

export default MuiTodoItem;
