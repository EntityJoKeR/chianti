import Link from "next/link";
import styles from "./ActionButton.module.css"

const ActionButton = ({href}) => {
    return (
        <Link className="ActionButton" href="#">Связаться</Link>
    );
};

export default ActionButton;