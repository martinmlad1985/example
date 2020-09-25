import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import MyPostReducer from "./MyPostsReducer";
import MyDialogsReducer from "./MyDialogsReducer";
import MyUsersReducer from "./MyUsersReducer";
import AuthReducer from "./AuthReduser";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import AppReducer from "./AppReducer";

let reducers= combineReducers({
    MyPostReducer: MyPostReducer,
    MyDialogsReducer: MyDialogsReducer,
    MyUsersReducer: MyUsersReducer,
    AuthReducer: AuthReducer,
    form: formReducer,
    AppReducer: AppReducer
});

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
       applyMiddleware(thunkMiddleware)
));


//let store= createStore(reducers, applyMiddleware(thunkMiddleware));

window.store= store;

export default store;