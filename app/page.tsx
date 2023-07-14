import styles from "./page.module.css";
import MyClientComp from "./components/MyClientComp";

export default function Home() {
  return (
    <main className={styles.main}>
      <MyClientComp />
    </main>
  );
}
