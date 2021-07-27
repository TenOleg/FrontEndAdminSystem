const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Post 1'}
    ],
    newPostText: 'BigProject'
}

const homePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newPostText}
        }

        case ADD_POST: {
            let body = state.newPostText
            return {
                ...state,
                posts: [...state.posts, {id: 2, message: body}],
                newPostText: ''
            };
        }

        default:
            return state;
    }
}

export let addPostActionCreator = () => ({type: ADD_POST})
export let updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text})

export default homePageReducer;