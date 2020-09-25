import {getUserDataThunkCreator} from "./AuthReduser";


const INITIALIZE = 'INITIALIZE'

let initialState = {
    initialStatus: false
}


let AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE:
            return {
                ...state,
                initialStatus: true
            }
        default:
            return state
    }
}

let initialize = () => {
    return {type: INITIALIZE};
}

export let initializeThunkCreator = () => (dispatch) => {
        let promise = dispatch(getUserDataThunkCreator());
        Promise.all([promise])
            .then(() => {
                dispatch(initialize());
            });
    }



export default AppReducer;