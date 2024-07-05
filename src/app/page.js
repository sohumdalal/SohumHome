import styles from "./page.module.css";
import Header from "./Header";
import BottomContainer from "./ContentContainer";


export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <BottomContainer />
    </main>
  );
}
