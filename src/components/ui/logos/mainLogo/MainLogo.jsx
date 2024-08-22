import styles from "./MainLogo.module.css"

const MainLogo = () => {
    return (
        <div className={styles.container}>
            <img src="/bigLogo.svg" className={styles.img}/>
            <img src="/arrowLogo.svg" className={styles.arrow}/>
        </div>
    );
};

export default MainLogo;