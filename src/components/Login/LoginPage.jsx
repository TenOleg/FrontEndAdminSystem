import React from "react";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/reducers/authReducer";
import {Redirect} from "react-router-dom";
import style from "../common/FormsControls/FormsControls.module.css"
import {creatField} from "../common/FormsControls/FormControls";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {creatField('Username', 'username', 'input')}
            {creatField('Password', 'password', 'input')}
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
            <div> {props.error && <div>{props.error}</div>}</div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const LoginPage = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.username, formData.password)
    }

    if (props.isAuth) {
        return <Redirect to={'/users'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

}

const mapStatToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStatToProps, {
    login
})(LoginPage);