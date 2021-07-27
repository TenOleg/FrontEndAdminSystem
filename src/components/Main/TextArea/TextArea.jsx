import React from "react";

const TextArea = (props) => {

    let onAddPost = () => {
        props.addPost();
    }

    let onChangePost = (e) => {
        let text = e.target.value; // вместо React.createRef()
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div><textarea onChange={onChangePost} value={props.newPostText}/></div>
            <div>
                <button onClick={onAddPost}>Add</button>
            </div>
        </div>
    )
}

export default TextArea;