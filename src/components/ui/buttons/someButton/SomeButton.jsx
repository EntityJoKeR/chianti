import Link from "next/link";
import "./SomeButton.css"

const SomeButton = () => {
    return (
        <Link href="#" className="SomeButton">
            Подробнее
            <img src="/Arrow.svg" className="ArrowImg"/>
        </Link>
    );
};

export default SomeButton;