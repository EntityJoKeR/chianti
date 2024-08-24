import styles from "./BottomBlock.module.css"

const BottomBlock = () => {
    return (
        <div className={styles.cards}>
            <div className={styles.card}>
                <span className={styles.num}>01</span>
                <h3 className={styles.text}>   
                    Аперитив -<br/>
                    <span className={styles.word}>
                    Welcome
                    </span>
                </h3>
            </div>

            <div className={styles.card}>
                <span className={styles.num}>02</span>
            </div>

            <div className={styles.card}>
                <span className={styles.num}>03</span>
            </div>

            <div className={styles.card}>
                <span className={styles.num}>04</span>
            </div>
        </div>
    );
};

export default BottomBlock;