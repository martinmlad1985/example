import React, {useEffect, useState} from "react";


const StatusWithHOOK = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [text, setText] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(text);
    }
    const setTextInLocalState = (event) => {
        setText(event.target.value);
    }

    useEffect(()=>{
        setText(props.status);
    }, [props.status])

    return (
        <span>
            {!editMode &&
                <span onDoubleClick={activateEditMode}>{props.status || '@@@@@@@@@'}</span>
            }

            {editMode &&
            <div>
                <input onBlur={deactivateEditMode}
                       onChange={setTextInLocalState}
                       autoFocus={true}
                       value={text}/>
            </div>
            }

        </span>
    )
}


export default StatusWithHOOK;