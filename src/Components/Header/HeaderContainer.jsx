import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getUserDataThunkCreator, sendLogoutCreator} from "../../Redux/AuthReducer";

class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props}/>
        );
    }

};

let mapStateToProps = (state) => {
    return {
        id: state.AuthReducer.id,
        email: state.AuthReducer.email,
        login: state.AuthReducer.login,
        isAuth: state.AuthReducer.isAuth
    };
}

export default connect(mapStateToProps, {getUserDataThunkCreator, sendLogoutCreator})(HeaderContainer);
