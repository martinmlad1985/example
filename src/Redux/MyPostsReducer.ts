import {profileAPI} from "../API/API";

const CHANGE_POSTTT = 'CHANGE-POSTTT';
const GET_USER_PROFILE = 'GET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'

type ChangePostttCreatorType= {
    type: typeof CHANGE_POSTTT
    value: string
}
export let ChangePostttCreator = (value: string): ChangePostttCreatorType => (
     {type: CHANGE_POSTTT, value}
)

type GetUserProfileType={
  type: typeof GET_USER_PROFILE
  userProfile: UserProfileType
}
export let getUserProfile = (userProfile: UserProfileType): GetUserProfileType => (
     {type: GET_USER_PROFILE, userProfile}
)

type SetStatusType= {
    type: typeof SET_STATUS
    status: string
}
export let setStatus = (status: string): SetStatusType => (
     {type: SET_STATUS, status: status}
)

type ContactsType={
    facebook: null | string
    github: null | string
    instagram: null | string
    mainLink: null | string
    twitter: null | string
    vk: null | string
    website: null | string
    youtube: null | string
}
type PhotosType={
    large: string | null
    small: string | null
}
type UserProfileType={
    aboutMe: null | string
    contacts: ContactsType
    fullName: string | null
    lookingForAJob: boolean | null
    lookingForAJobDescription: null | string
    userId: number
    photos: PhotosType
}
const initialState = {
    arrPosts: ['Post1', 'Post2', 'Post3', 'Post4'] as Array<string>,
    currentPost: '',
    userProfile: null as UserProfileType | null,
    status: ''
}
type InitialStateType= typeof initialState

const MyPostReducer = (state = initialState, action: any):InitialStateType => {
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

export let getStatusThunkCreator = (userId: number) => (dispatch: any) => {
        profileAPI.getStatus(userId).then((response: any)  => {

            dispatch(setStatus(response.data));
        })
    }


export let updateStatusThunkCreator = (status: string) =>  (dispatch: any) => {
        profileAPI.updateStatus(status).then((response: any) => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
    }
export const getProfileDataTC= (userId: number) => (dispatch: any) => {
    profileAPI.profileData(userId).then((response: any) =>{
          dispatch(getUserProfile(response.data));
    })
}



export default MyPostReducer;