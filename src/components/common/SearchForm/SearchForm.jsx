import {creatField} from "../FormsControls/FormControls";
import React from "react";
import {reduxForm} from "redux-form";

const SearchForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            {creatField('Search...', 'keyword', 'input')}
            <button>search</button>
        </form>
    </div>
}

export const UsersSearchReduxForm = reduxForm({form: 'getUsers'})(SearchForm);
export const PostsSearchReduxForm = reduxForm({form: 'getPosts'})(SearchForm);