import * as React from "react";
import {connect} from "react-redux";
import {
    ChangePostttCreator, getProfileDataTC,
    getStatusThunkCreator,
    getUserProfile,
    updateStatusThunkCreator
} from "../../../Redux/MyPostsReducer";
import {withRouter} from "react-router-dom";
import MyPosts from "./MyPosts";
import {compose} from "redux";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";


class MyPostsContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.myId;
        }
        this.props.getProfileDataTC(userId);
        this.props.getStatusThunkCreator(userId);
    }

    shouldComponentUpdate(nextProps, nextState) {

        let a = nextProps !== this.props;
        let b = nextState !== this.state;
        let c= a||b;
        return c;
    }

    render() {
        return <MyPosts {...this.props}   />
    }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.MyPostReducer.userProfile,
        isAuth: state.AuthReducer.isAuth,
        arrPosts: state.MyPostReducer.arrPosts,
        currentPost: state.MyPostReducer.currentPost,
        status: state.MyPostReducer.status,
        myId: state.AuthReducer.id
    };
}

export default compose(
    connect(mapStateToProps, {
        getUserProfile, ChangePostttCreator,
        getStatusThunkCreator, updateStatusThunkCreator, getProfileDataTC
    }),
    withRouter,
    withAuthRedirect
)(MyPostsContainer)









