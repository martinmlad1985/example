import React from "react";
import {connect} from "react-redux";
import {
    setUsers, setCurrentPage, setUsersTotalCount,
    setIsFetching, buttonUnfollowThunkCreator, buttonFollowThunkCreator
} from "../../../Redux/MyUsersReducer";
import MyUsers from "./MyUsers";
import * as axios from "axios";
import Preloader from "../../Preloader/Preloader";
import {
    getCurrentPage,
    getIsFetching, getIsFollowing,
    getPageSize,
    getTotalUsersCount,
    getUsersData
} from "../../../Redux/users-selector";


class MyUsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "38520b65-cddd-4424-aaa9-b045804c3b92"
            }
        }).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setUsersTotalCount(response.data.totalCount);

        })
    }

    onChangePage = (pageNumber) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "38520b65-cddd-4424-aaa9-b045804c3b92"
            }
        }).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : ''}
            <MyUsers totalUsersCount={this.props.totalUsersCount}
                     pageSize={this.props.pageSize}
                     currentPage={this.props.currentPage}
                     onChangePage={this.onChangePage}
                     usersData={this.props.usersData}
                     isFetching={this.props.isFetching}
                     isFollowing={this.props.isFollowing}
                     buttonUnfollowThunkCreator={this.props.buttonUnfollowThunkCreator}
                     buttonFollowThunkCreator={this.props.buttonFollowThunkCreator}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: getUsersData(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowing: getIsFollowing(state)
    }
}

const MyUsersContainer2 = connect(mapStateToProps, {
    setUsers, setCurrentPage, setUsersTotalCount, setIsFetching,
    buttonUnfollowThunkCreator, buttonFollowThunkCreator
})(MyUsersAPIComponent);


export default MyUsersContainer2;