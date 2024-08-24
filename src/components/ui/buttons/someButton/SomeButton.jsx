import Link from "next/link";
import "./SomeButton.module.css"

const SomeButton = () => {
    return (
        <Link href="#" className="SomeButton">
            Подробнее
            <img src="/Arrow.svg" className="ArrowImg"/>
        </Link>
    );
};

export default SomeButton;