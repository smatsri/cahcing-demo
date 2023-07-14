import TodoItemWrapper from "@/app/components/TodoItemWrapper";
import { loadData } from "@/lib/todos/data";
import { ReactNode } from "react";

export default function PSRR() {
  const items: ReactNode[] = [];
  for (let i = 0; i < 20; i++) {
    items.push(<TodoItemWrapper id={i + 1} />);
  }
  return <main>{items}</main>;
}

export async function getServerSideProps() {
  await loadData(20);
  return { props: {} };
}
