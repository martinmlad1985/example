import React from "react";
import c from "./Navbar.module.css";
import MyMessage from "./MyMessage/MyMessage";
import MyPage from "./MyPage/MyPage";
import Users from "./Users/Users";

const Navbar= ()=> {
    return (
        <div className= {c.navbar}>
            Navbar
            <MyPage/>
            <MyMessage/>
            <Users/>
        </div>
    );
};

export default Navbar;