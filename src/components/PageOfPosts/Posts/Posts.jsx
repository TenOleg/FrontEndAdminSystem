import React from "react";
import Paginator from "../../common/Paginator/Paginator";
import Preloader from "../../common/Preloader/Preloader";
import {PostsSearchReduxForm} from "../../common/SearchForm/SearchForm";

const Posts = (props) => {

    const onSubmit = (formData) => {
        props.searchPost(formData.keyword)
    }

    return (
        <div>
            {props.isFetching ? <Preloader/> : null}
            <PostsSearchReduxForm onSubmit={onSubmit}/>
            {
                props.posts.map(p => <div key={p.id}>
                    <span>{p.id}</span>
                    <span>{p.title}</span>
                    <span>{p.description}</span>
                    <span>{p.status}</span>
                    <span>{p.created}</span>
                    <span>{p.updated}</span>
                    <span>{p.type}</span>
                    <span></span>
                </div>)
            }

            <Paginator totalItemsCount={props.totalPostsCount} onPageChanged={props.onPageChanged}
                       currentPage={props.currentPage} pageSize={props.pageSize}/>
        </div>
    )
}

export default Posts;