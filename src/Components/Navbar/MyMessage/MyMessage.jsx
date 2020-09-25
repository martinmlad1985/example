import React from "react";
import {NavLink} from "react-router-dom";
import c from "./MyMessage.module.css";

const MyMessage = () => {
    return (
        <div>
            <NavLink to="/dialogs" activeClassName={c.active} >
                MyMessage
            </NavLink>
        </div>
    );
};

export default MyMessage;