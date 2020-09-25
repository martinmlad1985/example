import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Users.module.css"

const Users= ()=>{
    return (
        <div>
            <NavLink to= "/users" activeClassName={s.active} >
                Users
            </NavLink>
        </div>
    )
}

export default Users