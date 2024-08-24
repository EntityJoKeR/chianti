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
                <h3 className={styles.text}>   
                    Ужин -<br/>
                    <span className={styles.word}>
                    Концерт
                    </span>
            </div>

            <div className={styles.card}>
                <span className={styles.num}>03</span>
                <h3 className={styles.text}>   
                    Дижестив -<br/>
                    <span className={styles.word}>
                    Караоке. After party
                    </span>
            </div>

            <div className={styles.card}>
                <span className={styles.num}>04</span>
                <h3 className={styles.text}>   
                    Соло<br/>
                </h3>
            </div>
        </div>
    );
};

export default BottomBlock;