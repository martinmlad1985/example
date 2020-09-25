import React, {Component} from 'react';
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
// import Content from "./Components/Content/Content";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {connect} from "react-redux";
import {initializeThunkCreator} from "./Redux/AppReducer";
import Preloader from "./Components/Preloader/Preloader";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

const Content = React.lazy(() => import('./Components/Content/Content'));

class App extends Component {
  componentDidMount() {
    this.props.initializeThunkCreator();
  }

  render() {

    if (!this.props.initialStatus) {
      return (
          <div>
            <Preloader/>
          </div>
      )
    }

    return (
        <div className="wrapper">
          <HeaderContainer/>
          <Navbar/>
          <React.Suspense fallback={<div>Загрузка...</div>}>
            <Content/>
          </React.Suspense>
        </div>
    )
  }
}

let mapStateToProps = (props) => {
  return {
    initialStatus: props.AppReducer.initialStatus
  }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeThunkCreator}))(App);
