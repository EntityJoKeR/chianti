import Link from "next/link";
import "./ActionButton.css"

const ActionButton = ({href}) => {
    return (
        <Link className="ActionButton" href="#">Связаться</Link>
    );
};

export default ActionButton;