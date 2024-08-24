import MainLogo from "@/components/ui/logos/mainLogo/MainLogo";
import "./TopBlock.module.css"
import ActionButton from "@/components/ui/buttons/ActionButton/ActionButton";
import TelegramIcon from "@/components/ui/icons/TelegramIcon/TelegramIcon";
import InstagramIcon from "@/components/ui/icons/InstagramIcon/InstagramIcon";
import WhatsappIcon from "@/components/ui/icons/WhatsapIcon/WhatsappIcon";

const TopBlock = () => {
    return (
        <div className="TopBlock">
            <img src="/mainImg.svg" className="TopBlockImg"/>
            <div className="TopBlockContent">
                <MainLogo></MainLogo>
                <p className="ContentText">
                Кьянти может быть на аперитив, может быть под горячее, а может быть ярким дижестивом. <br/><br/>
                Мы элегантно начинаем вечер, будоражуще его сопровождаем, и ярко завершаем. Кьянти - настроение праздника!
                </p>
                <ActionButton/>
                <div className="ContentIcons">
                    <TelegramIcon/>
                    <InstagramIcon/>
                    <WhatsappIcon/>
                </div>
            </div>
        </div>
    );
};

export default TopBlock;