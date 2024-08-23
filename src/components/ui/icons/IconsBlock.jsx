import styles from "./IconsBlock.module.css"
import InstagramIcon from "./InstagramIcon/InstagramIcon";
import TelegramIcon from "./TelegramIcon/TelegramIcon";
import WhatsappIcon from "./WhatsapIcon/WhatsappIcon";

const IconsBlock = () => {
    return (
        <div className={styles.container}>

            <TelegramIcon/>
            <InstagramIcon/>
            <WhatsappIcon/>
        </div>
    );
};

export default IconsBlock;