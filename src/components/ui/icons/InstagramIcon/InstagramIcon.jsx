import Link from "next/link"
import styles from "./InstagramIcon.module.css"

const InstagramIcon = ({href}) => {
    
    return (
        <Link href={href!==undefined?href:'#'}>
            <div className={styles.container}>
            <div className={styles.inner}>
                    <img src="/InstagramLogo.svg" className={styles.img}/>
                </div>
            </div>
        </Link>
        )
}

export default InstagramIcon