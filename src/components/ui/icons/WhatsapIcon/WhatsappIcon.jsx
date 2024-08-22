import styles from "./WhatsappIcon.module.css"

const WhatsappIcon = (props) => {
    
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <img src="/WhatsappLogo.svg" className={styles.img}/>
            </div>
        </div>
        )
}

export default WhatsappIcon