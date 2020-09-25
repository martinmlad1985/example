import React from "react";
import {NavLink} from "react-router-dom";
import c from "./MyPage.module.css";

const MyPage = () => {
    return (
        <div>
            <NavLink to= "/posts" activeClassName={c.active}>
                MyPage
            </NavLink>
        </div>
    );
};

export default MyPage;