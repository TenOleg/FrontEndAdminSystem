import React from "react";
import {reduxForm} from "redux-form";
import {creatField} from "../FormsControls/FormControls";
import styles from './SearchForm.module.css'

const SearchForm = (props) => {
    return <div className={styles.searchBox}>
        <form  onSubmit={props.handleSubmit}>
            {creatField('Search...', 'keyword', 'input')}
        </form>
    </div>
}

export const UsersSearchReduxForm = reduxForm({form: 'getUsers'})(SearchForm);
export const PostsSearchReduxForm = reduxForm({form: 'getPosts'})(SearchForm);