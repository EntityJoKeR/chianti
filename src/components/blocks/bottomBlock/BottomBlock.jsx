import "./BottomBlock.module.css"

const BottomBlock = () => {
    return (
        <div className="Cards">
            <div className="Card">
                <span className="CardNum">01</span>
                <h3 className="CardText">   
                    Аперитив -<br/>
                    <span className="CardWord">
                    Welcome
                    </span>
                </h3>
            </div>

            <div className="Card">
                <span className="CardNum">02</span>
                <h3 className="CardText">   
                    Ужин -<br/>
                    <span className="CardWord">
                    Концерт
                    </span>
            </div>

            <div className="Card">
                <span className="CardNum">03</span>
                <h3 className="CardText">   
                    Дижестив -<br/>
                    <span className="CardWord">
                    Караоке. After party
                    </span>
            </div>

            <div className="Card">
                <span className="CardNum">04</span>
                <h3 className="CardText">   
                    Соло<br/>
                </h3>
            </div>
        </div>
    );
};

export default BottomBlock;