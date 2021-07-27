let initialState = {
    posts: [
        {id: 1, name: 'Post1', comment: 'user1blocked'},
        {id: 2, name: 'Post2', comment: 'user1blocked'},
        {id: 3, name: 'Post3', comment: 'user1blocked'},
        {id: 4, name: 'Post4', comment: 'user1blocked'}
    ]
}

const postsPageReducer = (state = initialState, action) => {
    return state;
}

export default postsPageReducer;