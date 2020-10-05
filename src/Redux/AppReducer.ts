import {getUserDataThunkCreator} from "./AuthReducer";


const INITIALIZE = 'INITIALIZE'

type InitialStateType = {
    initialStatus: boolean
}

let initialState: InitialStateType = {
    initialStatus: false
}


let AppReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case INITIALIZE:
            return {
                ...state,
                initialStatus: true,
            }
        default:
            return state
    }
}

let initialize = () => {
    return {type: INITIALIZE};
}

export let initializeThunkCreator = () => (dispatch: any) => {
    let promise = dispatch(getUserDataThunkCreator());
    Promise.all([promise])
        .then(() => {
            dispatch(initialize());
        });
}


export default AppReducer;