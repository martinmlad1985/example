import {authAPI} from "../API/API";
import {stopSubmit} from "redux-form";

const GET_USER_DATA = 'GET_USER_DATA';

type InitialStateType={
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}
const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}



const AuthReducer = (state = initialState, action: any):InitialStateType => {
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

type GetUserDataDataType={
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type GetUserDataType={
    type: typeof GET_USER_DATA
    data: GetUserDataDataType
}
export const getUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): GetUserDataType => (
     {
        type: GET_USER_DATA,
        data: {id, email, login, isAuth}
     }
)

export const getUserDataThunkCreator = () => (dispatch: any) => {
    return authAPI.authMe().then((data: any) => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(getUserData(id, email, login, true));
        }
    })
}

export const sendLoginCreator = (formData: any) => (dispatch: any) => {
    authAPI.login(formData).then((data: any) => {
        if (data.data.resultCode === 0) {
            dispatch(getUserDataThunkCreator());
        } else {
            let message = data.data.messages.length > 0 ? data.data.messages[0] : 'incorrect value';
            dispatch(stopSubmit('login', {_error: message}));
        }
    })
}

export const sendLogoutCreator = () => (dispatch: any) => {
    authAPI.logout().then((data:any) => {
        if (data.data.resultCode === 0) {
            dispatch(getUserData(null, null, null, false));
        }
    })
}


export default AuthReducer;