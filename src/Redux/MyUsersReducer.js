import {usersAPI} from "../API/API";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const SET_IS_FETCHING= 'SET_IS_FETCHING';
const DISABLE_BUTTON= 'DISABLE_BUTTON';

export let follow = (id) => {
    return {type: FOLLOW, id: id};
}
export let unfollow = (id) => {
    return {type: UNFOLLOW, id: id};
}
export let setUsers = (users) => {
    return {type: SET_USERS, users}
}
export let setCurrentPage = (pageNumber) => {
    return {type: SET_CURRENT_PAGE, pageNumber}
}
export let setUsersTotalCount = (totalCount) => {
    return {type: SET_USERS_TOTAL_COUNT, totalCount}
}
export let setIsFetching = (isFetch) => {
    return {type: SET_IS_FETCHING, isFetch}
}
export let disableButton = (result, userId) => {
    return {type: DISABLE_BUTTON, result, userId}
}

let initialState = {
    users: [],
    pageSize: 40,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowing: [ ]
}

let MyUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((elem) => {
                    if (elem.id === action.id) {
                        return {...elem, followed: true}
                    }
                    return elem;
                })
            }
        }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((elem) => {
                    if (elem.id === action.id) {
                        return {...elem, followed: false}
                    }
                    return elem;
                })
            }
        case  SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case  SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.pageNumber
            }
        }
        case SET_USERS_TOTAL_COUNT : {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetch
            }
        }
        case DISABLE_BUTTON: {
            return {
                ...state,
                isFollowing: action.result
                    ? [...state.isFollowing, action.userId]
                    : state.isFollowing.filter(elem=> elem !== action.userId)
            }
        }
        default:
            return state;
    }
}

export let buttonUnfollowThunkCreator= (userId)=> (dispatch) => {
        dispatch(disableButton(true, userId));
        usersAPI.unfollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollow(userId));
            }
            dispatch(disableButton(false, userId));
        })
    }


export let buttonFollowThunkCreator= (userId)=> (dispatch) => {
        dispatch(disableButton(true, userId));
        usersAPI.follow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(follow(userId));
            }
            dispatch(disableButton(false, userId));
        })
    }






export default MyUsersReducer;