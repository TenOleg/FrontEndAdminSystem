import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import Paginator from "../../common/Paginator/Paginator";
import {UsersSearchReduxForm} from "../../common/SearchForm/SearchForm";

const Users = (props) => {

    const onSubmit = (formData) => {
        props.searchUser(formData.keyword)
    }

    return <div>
        {props.isFetching ? <Preloader/> : null}
        <UsersSearchReduxForm onSubmit={onSubmit}/>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                    <span>{u.id}</span>
                    <NavLink to={'/profile/' + u.id}><span>{u.username}</span></NavLink>
                    <span>{u.status}</span>
                    <span>{u.created}</span>
                    <span>{u.updated}</span>
                    </span>
            </div>)
        }

        <Paginator totalItemsCount={props.totalUsersCount} onPageChanged={props.onPageChanged}
                   currentPage={props.currentPage} pageSize={props.pageSize}/>
    </div>
}

export default Users;