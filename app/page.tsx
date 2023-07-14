import styles from "./page.module.css";
import TodoItemWrapper from "./components/TodoItemWrapper";
import { loadData } from "@/lib/todos/data";
import { ReactNode } from "react";

export default async function Home() {
  await loadData(20);
  const items: ReactNode[] = [];
  for (let i = 0; i < 20; i++) {
    items.push(<TodoItemWrapper id={i + 1} />);
  }
  return <main className={styles.main}>{items}</main>;
}
