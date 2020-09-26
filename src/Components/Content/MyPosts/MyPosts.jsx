import React from "react";
import c from "./MyPosts.module.css";
import Preloader from "../../Preloader/Preloader";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../Utils/Validator";
import {Textarea} from "../../Utils/ControlForms";
import StatusWithHOOK from "./Status/StatusWithHOOK";

const Post = (props) => {
    return (
        <div>
            {props.qqq}
        </div>
    )
}

const maxLength15= maxLengthCreator(15);
const PostForm = (props) => {
       return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'PostTextareaValue'}
                       component={Textarea}
                       validate={[required, maxLength15]}
                       placeholder={'add post'}
                />
            </div>
            <div>
                <button>Добавить</button>
            </div>
        </form>
    )
}
const PostReduxForm = reduxForm({form: 'PostForm'})(PostForm);

const MyPosts =  (props) => {

    let result = props.arrPosts.map(elem => {
        return <Post key={elem.toString()} qqq={elem}/>
    });
    if (!props.userProfile) {
        return <Preloader/>
    }
    let onSubmit = (value) => {
        props.ChangePostttCreator(value.PostTextareaValue);
    }
    return (

        <div className={c.content}>

            <img src={props.userProfile.photos.large} alt="qqq"/>
            <StatusWithHOOK status={props.status} updateStatus={props.updateStatusThunkCreator}/>

            <PostReduxForm onSubmit={onSubmit}/>

            <div>
                {result}
            </div>

        </div>
    );
};

export default MyPosts;