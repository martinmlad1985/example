import MyPostReducer from "./MyPostsReducer";
import MyDialogsReducer from "./MyDialogsReducer";

let store = {
    _state: {
        MyPageState:{
            arrPosts: ['Post1', 'Post2', 'Post3', 'Post4'],
            currentPost: ''
        },
        MyMessageState: {
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
        }
     },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this.rerenderAllTree = observer;
    },
    rerenderAllTree() {
        console.log('bla-bla');
    },
    dispatch(action) {
        this._state.MyPageState = MyPostReducer(this._state.MyPageState, action);
        this._state.MyMessageState = MyDialogsReducer(this._state.MyMessageState, action);

        this.rerenderAllTree(this._state);
    }
}

export default store;







