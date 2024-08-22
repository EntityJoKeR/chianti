import styles from "./InstagramIcon.module.css"

const InstagramIcon = (props) => {
    
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <img src="/InstagramLogo.svg" className={styles.img}/>
            </div>
        </div>
        )
}

export default InstagramIcon