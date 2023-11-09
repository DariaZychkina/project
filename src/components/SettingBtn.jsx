import React from "react";

const SettingsBtn = function(props) {
    return (
        <div className="settings">
            <img src={props.imgOnePath}/>
            <span>{props.label}</span>
            <img src={props.imgTwoPath} />
        </div>

    )
}
export default SettingsBtn;