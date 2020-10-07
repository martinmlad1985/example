import React from "react";
import c from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header= (props)=> {
    let logout= ()=>{
        props.sendLogoutCreator();
    }
    return (
        <div className= {c.header}>
            <div className={c.login}>
            { props.isAuth
                ?<div>{props.login}  <button onClick={logout}>Logout</button></div>
                :<NavLink to="/login">login</NavLink>
            }
            </div>

        </div>
    );
};

export default Header;