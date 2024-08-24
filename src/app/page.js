import Image from "next/image";
import styles from "./page.module.css";
import TelegramIcon from "../components/ui/icons/TelegramIcon/TelegramIcon"
import InstagramIcon from "@/components/ui/icons/InstagramIcon/InstagramIcon";
import WhatsappIcon from "@/components/ui/icons/WhatsapIcon/WhatsappIcon";
import ActionButton from "@/components/ui/buttons/ActionButton/ActionButton";
import MenuLogo from "@/components/ui/logos/menuLogo/MenuLogo";
import SomeButton from "@/components/ui/buttons/someButton/SomeButton";
import Cross from "@/components/ui/cross/Cross";
import MainLogo from "@/components/ui/logos/mainLogo/MainLogo";
import TopBlock from "@/components/blocks/topBlock/TopBlock";
import BottomBlock from "@/components/blocks/bottomBlock/BottomBlock";


export default function Home() {
  return (
      <main className={styles.main}>
      <header className={styles.header}><MenuLogo/></header>
        <TopBlock/>
        <BottomBlock/>
      </main>
  );
}
