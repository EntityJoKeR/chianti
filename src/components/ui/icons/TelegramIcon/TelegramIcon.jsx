import styles from "./TelegramIcon.module.css"
import Link from "next/link"

const TelegramIcon = ({href}) => {
    
    return (
        <Link href={href!==undefined?href:'#'}>
        <div className={styles.container}>
            <div className={styles.inner}>
                <img src="/TelegramLogo.svg" className={styles.img}/>
            </div>
        </div>
        </Link>
        )
}

export default TelegramIcon


