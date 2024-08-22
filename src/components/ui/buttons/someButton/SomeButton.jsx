import Link from "next/link";
import styles from "./SomeButton.module.css"

const SomeButton = () => {
    return (
        <Link href="#" className={styles.container}>
            Подробнее
            <img src="/Arrow.svg" className={styles.img}/>
        </Link>
    );
};

export default SomeButton;