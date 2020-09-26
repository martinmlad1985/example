import * as React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import {
    ChangePostttCreator,
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

        axios.get('https://social-network.samuraijs.com/api/1.0//profile/' + userId,{
            withCredentials: true,
            headers: {
                "API-KEY": "38520b65-cddd-4424-aaa9-b045804c3b92"
            }
        }).then(response => {
            this.props.getUserProfile(response.data);
        })
        this.props.getStatusThunkCreator(userId);
    }

    shouldComponentUpdate(nextProps, nextState) {

        let a = nextProps != this.props;
        let b = nextState != this.state;
        let c= a ||b;
        return c;
    }

    render() {
        console.log('render');
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
        getStatusThunkCreator, updateStatusThunkCreator
    }),
    withRouter,
    withAuthRedirect
)(MyPostsContainer)









