import React from "react";
import MainPosts from "./mainPosts/MainPosts";
import TextAreaContainer from "./TextArea/TextAreaContainer";

const Home = (props) => {
    let postsElements = props.posts.map(post => <MainPosts key={post.id} id={post.id} message={post.message}/>)

    return (
        <div>
            <div>HOME</div>
            <TextAreaContainer/>
            <div>
                {postsElements}
            </div>
        </div>
    )

}

export default Home;