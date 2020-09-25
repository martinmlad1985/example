const CHANGE_MESSAGE = 'CHANGE-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

export let changeMessageCreator = (result) => {
    return {type: CHANGE_MESSAGE, elem: result};
}
export let addMessageCreator = (result) => {
    return {type: ADD_MESSAGE, elem: result};
}

let initialState = {
    arrName: [
        {name: 'Dima', id: '1'},
        {name: 'Anna', id: '2'},
        {name: 'Dasha', id: '3'},
        {name: 'Margo', id: '4'}
    ],
    arrMessage: [
        {message: 'Hello', id: '1'},
        {message: 'Good day', id: '2'},
        {message: 'By-By', id: '3'}
    ],
    currentMessage: ''
};

const MyDialogsReducer = (state = initialState, action) => {

    if (action.type === CHANGE_MESSAGE) {
        return {
            copyState: {...state},
            arrName: [...state.arrName],
            arrMessage: [...state.arrMessage],
            currentMessage: action.elem
        }
    }

    if (action.type === ADD_MESSAGE) {
        return {
            copyState: {...state},
            arrName: [...state.arrName],
            arrMessage: [...state.arrMessage, {message: state.currentMessage, id: '4'}],
            currentMessage: ''
        }
    }
    return state;
}

export default MyDialogsReducer;