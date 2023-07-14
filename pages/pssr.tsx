import TodoItemWrapper from "@/app/components/TodoItemWrapper";
import { loadData } from "@/lib/todos/data";
import { ReactNode } from "react";
import "../app/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function createIds(size = 100) {
  const arr = new Array<number>(size);
  for (let i = 0; i < size; i++) {
    arr[i] = i + 1;
  }

  return arr;
}

const size = 100;

export default function PSRR() {
  const ids = createIds(size);
  const items: ReactNode[] = [];
  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    items.push(<TodoItemWrapper key={id} id={id} />);
  }
  return <main className={inter.className}>{items}</main>;
}

export async function getServerSideProps() {
  await loadData(size);
  return { props: {} };
}
