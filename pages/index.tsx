import TodoItemWrapper from "@/components/TodoItemWrapper";
import { loadData } from "@/lib/todos/data";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { CacheProvider } from "@emotion/react";
import { cache } from "@/lib/emotion";
import "../app/globals.css";
const inter = Inter({ subsets: ["latin"] });

function createIds(size = 100) {
  const arr = new Array<number>(size);
  for (let i = 0; i < size; i++) {
    arr[i] = i + 1;
  }

  return arr;
}

const size = 100;

export default function Home() {
  const ids = createIds(size);
  const items: ReactNode[] = [];
  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    items.push(<TodoItemWrapper key={id} id={id} />);
  }
  return (
    <CacheProvider value={cache}>
      <main className={inter.className}>{items}</main>
    </CacheProvider>
  );
}

export async function getServerSideProps() {
  await loadData(size);
  return { props: {} };
}
