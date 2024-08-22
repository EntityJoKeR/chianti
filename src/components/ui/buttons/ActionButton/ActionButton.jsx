import Link from "next/link";
import styles from "./ActionButton.module.css"

const ActionButton = () => {
    return (
        <Link className={styles.container} href="#">Связаться</Link>
    );
};

export default ActionButton;