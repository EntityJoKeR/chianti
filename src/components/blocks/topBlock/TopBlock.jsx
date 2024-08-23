import MainLogo from "@/components/ui/logos/mainLogo/MainLogo";
import styles from "./TopBlock.module.css"
import ActionButton from "@/components/ui/buttons/ActionButton/ActionButton";
import TelegramIcon from "@/components/ui/icons/TelegramIcon/TelegramIcon";
import InstagramIcon from "@/components/ui/icons/InstagramIcon/InstagramIcon";
import WhatsappIcon from "@/components/ui/icons/WhatsapIcon/WhatsappIcon";

const TopBlock = () => {
    return (
        <div className={styles.container}>
            <img src="/mainImg.svg" className={styles.img}/>
            <div className={styles.content}>
                <MainLogo></MainLogo>
                <p className={styles.text}>
                Кьянти может быть на аперитив, может быть под горячее, а может быть ярким дижестивом. <br/><br/>
                Мы элегантно начинаем вечер, будоражуще его сопровождаем, и ярко завершаем. Кьянти - настроение праздника!
                </p>
                <ActionButton/>
                <div className={styles.iconsCont}>
                    <TelegramIcon/>
                    <InstagramIcon/>
                    <WhatsappIcon/>
                </div>
            </div>
        </div>
    );
};

export default TopBlock;