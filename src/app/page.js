import Image from "next/image";
import styles from "./page.module.css";
import WhatsapIcon from "../components/ui/WhatsapIcon/WhatsapIcon"


export default function Home() {
  return (
    <main className={styles.main}>
      <WhatsapIcon/>
      
    </main>
  );
}
