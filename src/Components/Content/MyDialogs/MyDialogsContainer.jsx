import {addMessageCreator, changeMessageCreator} from "../../../Redux/MyDialogsReducer";
import MyDialogs from "./MyDialogs";
import {connect} from "react-redux";


let mapStateToProps= (state)=> {

    return {
        arrName: state.MyDialogsReducer.arrName,
        arrMessage: state.MyDialogsReducer.arrMessage,
        currentMessage: state.MyDialogsReducer.currentMessage
    }
}

let mapDispatchToProps= (dispatch)=> {
    return{
        getDispatchForAddMessage: ()=>{
            dispatch(addMessageCreator());
        },
        getDispatchForChangeTextarea: (result)=>{
            dispatch(changeMessageCreator(result))
        }
    }
}



const MyDialogsContainer= connect(mapStateToProps, mapDispatchToProps)(MyDialogs);


export default MyDialogsContainer;