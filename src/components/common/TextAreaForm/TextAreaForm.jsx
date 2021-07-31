import React from "react";
import {creatField} from "../FormsControls/FormControls";
import {reduxForm} from "redux-form";

const TextAreaForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            {creatField('Put your message', 'comment', 'textarea') }
            <button>Save</button>
        </form>
    </div>
}

export  const TextAreaReduxForm = reduxForm({form: 'saveComment'})(TextAreaForm);