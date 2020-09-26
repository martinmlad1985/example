import React from "react";
import c from "./MyDialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div>
            {props.message}
        </div>
    )
}

const MyDialogs = (props) => {

    let arrElem = props.arrName.map(elem => {
        return <Dialog key={elem.name.toString()} name={elem.name} id={elem.id}/>
    })
    let arrElemMessage = props.arrMessage.map(elem => {
        return <Message key={elem.message.toString()} message={elem.message}/>
    })
    let addMessage= ()=>{
        props.getDispatchForAddMessage();
    };
    let changeMessage= (event)=> {
        let result= event.target.value;
        props.getDispatchForChangeTextarea(result);
     };

    return (
        <div className={c.content}>
            <div className={c.names}>
                {arrElem}
            </div>
            <div className={c.talks}>
                {arrElemMessage}
                <div><textarea onChange={changeMessage} value={props.currentMessage}/></div>
                <div><button onClick={addMessage}>Добавить</button></div>
            </div>
        </div>
    );
};

export default MyDialogs;