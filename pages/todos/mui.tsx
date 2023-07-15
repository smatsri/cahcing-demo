import MuiTodoItemWrapper from "@/components/MuiTodoItemWrapper";
import { loadData } from "@/lib/todos/mui";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { CacheProvider } from "@emotion/react";
import { cache } from "@/lib/emotion";
import "../../app/globals.css";
const inter = Inter({ subsets: ["latin"] });

const offset = 100;
const numItems = 100;

const ids = createIds();

export default function Home() {
  const items: ReactNode[] = [];
  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    items.push(<MuiTodoItemWrapper key={id} id={id} />);
  }
  return (
    <CacheProvider value={cache}>
      <main className={inter.className}>{items}</main>
    </CacheProvider>
  );
}

export async function getServerSideProps() {
  await loadData(numItems, offset);
  return { props: {} };
}

function createIds() {
  const arr = new Array<number>(numItems);
  for (let i = 0; i < numItems; i++) {
    arr[i] = i + 1 + offset;
  }

  return arr;
}
