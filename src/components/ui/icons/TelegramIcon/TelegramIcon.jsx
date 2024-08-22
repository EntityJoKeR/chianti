import styles from "./TelegramIcon.module.css"

const TelegramIcon = (props) => {
    
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <img src="/TelegramLogo.svg" className={styles.img}/>
            </div>
        </div>
        )
}

export default TelegramIcon


