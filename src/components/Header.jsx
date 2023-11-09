import React from "react";
import logo from "../img/logo.svg"
import SettingsBtn from "./SettingBtn";
import lang from "../img/lang.svg"
import arrow from "../img/back.svg"
import dec from "../img/decimal.png"
import wallet from "../img/wallet.svg"

const Header = function () {
    function menuClick(el) {
        var target = el.target;
        const a = document.getElementsByClassName("active");
        a[0].className = "unactive";
        target.className = "active"
    }
    return (
        <div className="header">
            <div className="leftContent">
                <div className="logo">
                    <img src={logo} alt="Logo"/>
                    <p>Canyon Swap</p>
                </div>
                <div className="links">
                    <a className="active" onClick={menuClick.bind(this)} >Главная</a>
                    <a className="unactive"  onClick={menuClick.bind(this)} >Лендинг</a>
                    <a className="unactive" onClick={menuClick.bind(this)} >FAQ</a>
                    <a className="unactive" onClick={menuClick.bind(this)}>Обратная связь</a>
                </div>
            </div>
            <div className="rightContent">
                <SettingsBtn imgOnePath={lang} label={"RU"} imgTwoPath={arrow}/>
                <SettingsBtn imgOnePath={dec} label={"Decimal"}/>
                <SettingsBtn imgOnePath={wallet} label={"Connect wallet"}/>
            </div>

        </div>
    );
}
export default Header;