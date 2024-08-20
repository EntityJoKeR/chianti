import Image from "next/image";
import styles from "./WhatsapIcon.module.css"


const WhatsapIcon = (props) => {
    return (
        <div className={styles.container}>
            <image src="./Ellipse.svg" className={styles.eclipse}/>
            <image src="./whatsapLogo.svg" className={styles.whatsapLogo}/>

        </div>
    );
};

export default WhatsapIcon;