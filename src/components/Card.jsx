import React from "react";
import arrow from "../img/back.svg"

const Card = function (props) {
    return (
        <div className={props.status}>
            <div className="order">
                <span>{props.order}</span>
            </div>
            <div className="currency">
                <div className="curSelected">
                    <img className="logoCurrency" src={props.imgCurrency} />
                    <span>{props.currencyName}</span>
                    <img className="arrow" src={arrow} />
                </div>
                <div className="sum">{props.sum}</div>
            </div>         
            <div className="convert">
                <span className="sumLabel">{props.currencyName}</span>
                <span>{props.convertSum}</span>
            </div>   
        </div>
    )
}

export default Card