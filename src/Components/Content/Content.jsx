import React from "react";
import c from "./Content.module.css";
import {Route} from "react-router-dom";
import MyDialogsContainer from "./MyDialogs/MyDialogsContainer";
import MyUsersContainer2 from "./Users/MyUsersContainer2";
import MyPostsContainer2 from "./MyPosts/MyPostsContainer";
import Login from "../Login/Login";

const Content = (props) => {
     return (
        <div className={c.content}>
            Content
            <Route path="/dialogs" render= {() => <MyDialogsContainer />}
            />

            <Route path="/posts/:userId?" render= {() => <MyPostsContainer2 />}
            />

            <Route path="/users" render= {() => <MyUsersContainer2 />}
            />

            <Route path="/login" render= {() => <Login />}
            />


        </div>
    );
};

export default Content;