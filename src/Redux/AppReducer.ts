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
type InitializeType= {type: typeof INITIALIZE}
const initialize = (): InitializeType =>  ({type: INITIALIZE})

export const initializeThunkCreator = () => (dispatch: any) => {
    const promise = dispatch(getUserDataThunkCreator());
    Promise.all([promise])
        .then(() => {
            dispatch(initialize());
        });
}


export default AppReducer;