import Image from "next/image";
import styles from "./Home.module.css"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={styles.mainPage}>
      <p>This Page is styled with module.css</p>
      </div>
     
    </main>
  );
}
