import {profileAPI} from "../API/API";

const CHANGE_POSTTT = 'CHANGE-POSTTT';
const GET_USER_PROFILE = 'GET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'

export let ChangePostttCreator = (value) => {
    return {type: CHANGE_POSTTT, value};
}

export let getUserProfile = (userProfile) => {
    return {type: GET_USER_PROFILE, userProfile};
}
export let setStatus = (status) => {
    return {type: SET_STATUS, status: status}
}


let initialState = {
    arrPosts: ['Post1', 'Post2', 'Post3', 'Post4'],
    currentPost: '',
    userProfile: null,
    status: ''
}

const MyPostReducer = (state = initialState, action) => {
    if (action.type === CHANGE_POSTTT) {
        return {
            ...state,
            arrPosts: [...state.arrPosts, action.value]

        }
    }

    if (action.type === GET_USER_PROFILE) {
        return {
            ...state,
            userProfile: action.userProfile
        }
    }
    if (action.type === SET_STATUS) {
        return {
            ...state,
            status: action.status
        }
    }

    return state;
}

export let getStatusThunkCreator = (userId) => (dispatch) => {
        profileAPI.getStatus(userId).then(response => {

            dispatch(setStatus(response.data));
        })
    }


export let updateStatusThunkCreator = (status) =>  (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
    }
export const getProfileDataTC= (userId) => (dispatch) => {
    profileAPI.profileData(userId).then(response =>{
          dispatch(getUserProfile(response.data));
    })
}



export default MyPostReducer;