import React from "react";
import s from "./MyUsers.module.css";
import image from "../../../assets/images/image.png";
import {NavLink} from "react-router-dom";
import Paginator from "../../Paginator/Paginator";

let MyUsers = (props) => {

    return <div>

        <Paginator totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                   currentPage={props.currentPage}
                   onChangePage={props.onChangePage}
        />

        {props.usersData.map(u => <div key={u.id}>
                <span>

                    <div>
                        <NavLink to={'/posts/' + u.id}>
                        <img src={u.photos.small ? u.photos.small : image} className={s.userPhoto}/>
                        </NavLink>
                    </div>

                    <div>
                        {u.followed
                            ? <button disabled={props.isFollowing.some(elem => elem === u.id)} onClick={() => {
                                props.buttonUnfollowThunkCreator(u.id);
                            }}>Unfollow</button>

                            : <button disabled={props.isFollowing.some(elem => elem === u.id)} onClick={() => {
                                props.buttonFollowThunkCreator(u.id);
                            }}>Follow</button>}
                    </div>

                </span>
            <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
        </div>)
        }
    </div>;
}


export default MyUsers;