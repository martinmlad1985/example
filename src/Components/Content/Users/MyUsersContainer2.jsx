import React from "react";
import {connect} from "react-redux";
import {getUsersListTC, buttonUnfollowThunkCreator, buttonFollowThunkCreator} from "../../../Redux/MyUsersReducer";
import MyUsers from "./MyUsers";
import Preloader from "../../Preloader/Preloader";
import {
    getCurrentPage, getIsFetching, getIsFollowing,
    getPageSize, getTotalUsersCount, getUsersData
} from "../../../Redux/users-selector";


class MyUsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsersListTC(this.props.currentPage, this.props.pageSize)
    }

    onChangePage = (pageNumber) => {
        this.props.getUsersListTC(pageNumber, this.props.pageSize)
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

const MyUsersContainer2 = connect(mapStateToProps,
    {buttonUnfollowThunkCreator, buttonFollowThunkCreator, getUsersListTC})(MyUsersAPIComponent);


export default MyUsersContainer2;