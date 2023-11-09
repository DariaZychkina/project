import React from "react";

const Footer = function () {

    return (
        <div className="footer">
            <span>Copyright. @ 2023 Corp Name Все права защищены</span>
            <div className="docs">
                <a href="/">Пользовательское соглашение</a>
                <div className="line"></div>
                <a href="/">Политика конфиденциальности</a>
            </div>
        </div>
    );
}

export default Footer;