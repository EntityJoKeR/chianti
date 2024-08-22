import styles from "./Cross.module.css"

const Cross = (props) => {
    return (
        <div className={styles.container}>
            <img src="/CROSS.svg" className={styles.img}/>
        </div>
    );
};

export default Cross;