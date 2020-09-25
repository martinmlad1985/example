import {authAPI} from "../API/API";
import {stopSubmit} from "redux-form";

const GET_USER_DATA = 'GET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

let AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_DATA: {
            return {
                ...state,
                ...action.data

            }
        }

        default:
            return state;
    }
}

export let getUserData = (id, email, login, isAuth) => {
    return {type: GET_USER_DATA, data: {id, email, login, isAuth}};
}

export let getUserDataThunkCreator = () =>  (dispatch) => {
     return authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(getUserData(id, email, login, true));
            }
        })
    }


export let sendLoginCreator = (formData) =>  (dispatch) => {
        authAPI.login(formData).then(data => {debugger
            if (data.data.resultCode === 0) {
                dispatch(getUserDataThunkCreator());
            } else {
                let message= data.data.messages.length> 0 ? data.data.messages[0] : 'incorrect value';
                dispatch(stopSubmit('login', {_error: message}));
            }
        })
    }


export let sendLogoutCreator = () =>  (dispatch) => {
        authAPI.logout().then(data => {
            if (data.data.resultCode === 0) {
                dispatch(getUserData(null, null, null, false));
            }
        })
    }



export default AuthReducer;