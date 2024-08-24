import SomeButton from "@/components/ui/buttons/someButton/SomeButton";
import "./BottomBlock.css"

const BottomBlock = () => {
    return (
        <div className="Cards">
            <div className="Card">
                <div className="CardTextBlock">
                    <div className="CardNum">01</div>
                    <p className="CardText">   
                        Аперитив -<br/>
                        <div className="CardWord">
                        Welcome
                        </div>
                    </p>
                </div>
                <img src="/photo1.svg" className="CardPhoto"/>
                <SomeButton/>
            </div>

            <div className="Card">
                <div className="CardTextBlock">
                    <div className="CardNum">02</div>
                    <p className="CardText">   
                        Ужин -<br/>
                        <div className="CardWord">
                        Концерт
                        </div>
                    </p>
                </div>
                <img src="/photo2.svg" className="CardPhoto"/>
                <SomeButton/>
            </div>

            <div className="Card">
                <div className="CardTextBlock">
                    <div className="CardNum">03</div>
                    <p className="CardText">   
                        Дижестив -<br/>
                        <div className="CardWord">
                        Караоке. After party
                        </div>
                    </p>
                </div>
                <img src="/photo3.svg" className="CardPhoto"/>
                <SomeButton/>
            </div>

            <div className="Card">
                <div className="CardTextBlock">
                    <div className="CardNum">04</div>
                    <p className="CardText">   
                        Соло<br/>
                    </p>
                </div>
                <img src="/photo4.svg" className="CardPhoto"/>
                <SomeButton/>
            </div>
        </div>
    );
};

export default BottomBlock;