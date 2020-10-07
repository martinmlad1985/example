import React from "react";
import s from "./MyPosts.module.css";
import Preloader from "../../Preloader/Preloader";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../Utils/Validator";
import {Textarea} from "../../Utils/ControlForms";
import StatusWithHOOK from "./Status/StatusWithHOOK";
import image from "../../../assets/images/image.png";

const Post = (props) => {
    return (
        <div>
            {props.qqq}
        </div>
    )
}

const maxLength15 = maxLengthCreator(15);
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

const MyPosts = (props) => {

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

        <div className={s.wrapper}>

            <img src={props.userProfile.photos.large || image} alt="no photo" className={s.photo}/>
            <div>
                <span>My status:  </span><StatusWithHOOK status={props.status} updateStatus={props.updateStatusThunkCreator}/>
            </div>
            <div>
                <span>About me:  </span><span>{props.userProfile.aboutMe}</span>
            </div>
            <div>
                <span>FullName:  </span><span>{props.userProfile.fullName}</span>
            </div>
            <div>
                <span>lookingForAJob:  </span><span>{props.userProfile.lookingForAJob}</span>
            </div>
            <div>
                <span>lookingForAJobDescription:  </span><span>{props.userProfile.lookingForAJobDescription}</span>
            </div>


            <PostReduxForm onSubmit={onSubmit}/>

            <div>
                {result}
            </div>

        </div>
    );
};

export default MyPosts;