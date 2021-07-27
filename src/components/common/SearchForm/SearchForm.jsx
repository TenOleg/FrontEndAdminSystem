import {CreatField} from "../FormsControls/FormControls";
import React from "react";
import {reduxForm} from "redux-form";

const SearchForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            {CreatField('Search...', 'username', 'input')}
            <button>search</button>
        </form>
    </div>
}

export const SearchReduxForm = reduxForm({form: 'findUserByUsername'})(SearchForm)

