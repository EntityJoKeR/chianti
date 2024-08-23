import Link from "next/link";
import styles from "./ActionButton.module.css"

const ActionButton = ({className}) => {
    return (
        <Link className={`${styles.container} ${className}`} href="#">Связаться</Link>
    );
};

export default ActionButton;