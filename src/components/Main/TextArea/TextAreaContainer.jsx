import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/homePageReducer";
import TextArea from "./TextArea";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostText: state.homePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const TextAreaContainer = connect(mapStateToProps, mapDispatchToProps)(TextArea);

export default TextAreaContainer;