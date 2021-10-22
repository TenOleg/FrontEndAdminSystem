import React from 'react';
import Preloader from "../../common/Preloader/Preloader";
import {UsersSearchReduxForm} from "../../common/SearchForm/SearchForm";
import Paginator from "../../common/Paginator/Paginator";
import {TabsStatusForUsers} from "../../common/Tabs/TabsStatusForUsers";

const Users = (props) => {

    const onSubmit = (formData) => {
        props.searchByKeyword(formData.keyword)
    }

    return (
        <div>
            {props.isFetching ? <Preloader/> : null}
            <UsersSearchReduxForm onSubmit={onSubmit}/>
            <TabsStatusForUsers users={props.users} message={props.message}
                                onChangeTabsStatus={props.onChangeTabsStatus}/>
            <Paginator totalItemsCount={props.totalUsersCount} onPageChanged={props.onPageChanged}
                       currentPage={props.currentPage} pageSize={props.pageSize}/>
        </div>
    );
}

export default Users;