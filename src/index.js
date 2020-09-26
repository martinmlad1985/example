import React from 'react';
import store from './Redux/store_redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter, BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>, document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
