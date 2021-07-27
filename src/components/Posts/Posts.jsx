import React from "react";
import {NavLink} from "react-router-dom";

const PostInfo = (props) => {
    let path = '/posts/' + props.id;
    return <div><NavLink to={path}>{props.name}</NavLink></div>
}

const Posts = (props) => {

    let state = props.postsPage;

    let postsElement = state.posts.map( post => <PostInfo key={post.id} name={post.name} id={post.id}/>)

    return (
        <div>
            <div>Posts List</div>
            <br></br>
            {postsElement}

        </div>
    )

}

export default Posts;