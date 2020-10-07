import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Utils/ControlForms";
import {required} from "../Utils/Validator";
import {sendLoginCreator} from "../../Redux/AuthReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let Login = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'email'} name={'email'} component={Input} validate={required}/> Введите тестовый Email: free@samuraijs.com
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input} validate={required} type={'password'}/> Введите тестовый пароль: free
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input}/> remember
            </div>
            {props.error && <div>
                {props.error}
            </div>
            }
            <div>
                <button>send</button>
            </div>
        </form>
    )
}

let ReduxFormLogin = reduxForm({
       form: 'login'
})(Login)

let LoginFull = (props) => {
    let onSubmit= (formData)=>{
        props.sendLoginCreator(formData);
    }
    
    if (props.isAuth){
       return <Redirect to={"/posts"}/>
    }
    
    return (
        <div >
            <h3>Login</h3>
            <ReduxFormLogin onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps= (props)=>({
    isAuth: props.AuthReducer.isAuth
})

export default connect(mapStateToProps, {sendLoginCreator})(LoginFull);