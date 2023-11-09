import React from "react";
import Card from "./Card";
import logoCRYG from "../img/logoCRYG.png"
import logoDEL from "../img/logoDEL.png"
import infoImg from "../img/codicon_info.png"
import wallet from "../img/wallet.svg"

const Content = function () {
    return (
        <div className="content">
            <div className="title">
                <span className="activeLabel">Swap</span>
                <span className="disableLabel">Pools</span>
            </div>
            <div className="cards">
                <Card status={"unactiveCard"} order={"Вы продаете"} imgCurrency={logoCRYG} currencyName={"CRYG"} sum={"1"} convertSum={"~$333.73"}/>
                <Card status={"activeCard"} order={"Вы покупаете"} imgCurrency={logoDEL} currencyName={"DEL"} sum={"714.543016"} convertSum={"~$331.62 (-0.63%)"}/>
            </div>
            <div className="exchangeRate">
                <img src={infoImg} />
                <span>1 CRYG = 714.543 DEL</span>
                <span id="resultCount">($331.42)</span>
            </div>
            <div className="connectBtn">
                <img src={wallet} />
                <span>Сonnect walley</span>
            </div>
        </div>
    )
}
export default Content;