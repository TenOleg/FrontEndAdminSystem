import React from 'react';
import Preloader from "../../common/Preloader/Preloader";
import {UsersSearchReduxForm} from "../../common/SearchForm/SearchForm";
import Paginator from "../../common/Paginator/Paginator";
import {TabsStatusForPosts} from "../../common/Tabs/TabsStatusForPosts";

const Posts = (props) => {
    const onSubmit = (formData) => {
        props.searchPost(formData.keyword)
    }

    return (
        <div>
            {props.isFetching ? <Preloader/> : null}
            <UsersSearchReduxForm onSubmit={onSubmit}/>
           <TabsStatusForPosts posts={props.posts} message={props.message} onChangeTabsStatus={props.onChangeTabsStatus}/>
            <Paginator totalItemsCount={props.totalPostsCount} onPageChanged={props.onPageChanged}
                       currentPage={props.currentPage} pageSize={props.pageSize}/>
        </div>

    );
}
export default Posts;