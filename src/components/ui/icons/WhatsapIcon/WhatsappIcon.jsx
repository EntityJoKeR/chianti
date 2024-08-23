import Link from "next/link"
import styles from "./WhatsappIcon.module.css"

const WhatsappIcon = ({href}) => {
    
    return (
        <Link href={href!==undefined?href:'#'}>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <img src="/WhatsappLogo.svg" className={styles.img}/>
                </div>
            </div>
        </Link>
        )
}

export default WhatsappIcon