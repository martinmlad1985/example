const CHANGE_MESSAGE = 'CHANGE-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';


type ChangeMessageCreatorType={
    type: typeof CHANGE_MESSAGE
    elem: string
}
export const changeMessageCreator = (result: string):ChangeMessageCreatorType => (
     {
         type: CHANGE_MESSAGE,
         elem: result
     }
)

type AddMessageCreatorType={
    type: typeof ADD_MESSAGE
    elem: string
}
export const addMessageCreator = (result: string):AddMessageCreatorType => (
     {
         type: ADD_MESSAGE,
         elem: result
     }
)

type ArrNameType={
    name: string
    id: string
}
type ArrMessageType={
    message: string
    id: string
}
const initialState = {
    arrName: [
        {name: 'Dima', id: '1'},
        {name: 'Anna', id: '2'},
        {name: 'Dasha', id: '3'},
        {name: 'Margo', id: '4'}
    ] as Array<ArrNameType>,
    arrMessage: [
        {message: 'Hello', id: '1'},
        {message: 'Good day', id: '2'},
        {message: 'By-By', id: '3'}
    ] as Array<ArrMessageType>,
    currentMessage: ''
};

type InitialStateType= typeof initialState


const MyDialogsReducer = (state = initialState, action: any):InitialStateType => {

    if (action.type === CHANGE_MESSAGE) {
        return {
            ...state,
            currentMessage: action.elem
        }
    }

    if (action.type === ADD_MESSAGE) {
        return {
            ...state,
            arrMessage: [...state.arrMessage, {message: state.currentMessage, id: '4'}],
            currentMessage: ''
        }
    }
    return state;
}

export default MyDialogsReducer;