import TodoItemWrapper from "@/app/components/TodoItemWrapper";
import { loadData } from "@/lib/todos/data";
import { ReactNode } from "react";

function createIds(size = 100) {
  const arr = new Array<number>(size);
  for (let i = 0; i < size; i++) {
    arr[i] = i + 1;
  }
  return arr;
}

export const revalidate = 0;
const size = 100;

export default async function PSRR() {
  await loadData(size);
  const ids = createIds(size);
  const items: ReactNode[] = [];
  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    items.push(<TodoItemWrapper id={id} />);
  }
  return <main>{items}</main>;
}
