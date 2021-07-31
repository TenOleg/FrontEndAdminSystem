import {CURRENT_PAGE, SET_KEYWORD, SET_POSTS, SET_TOTAL_COUNT, TOGGLE_IS_FETCHING} from "../common/constants/constants";
import {postsAPI} from "../../components/api/api";

let initialState = {
    posts: [],
    keyword: '',
    pageSize: 5,
    totalPostsCount: 0,
    currentPage: 1,
    isFetching: false
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_KEYWORD:
            return {...state, keyword: action.keyword}
        case SET_POSTS:
            return {...state, posts: action.posts}
        case CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_COUNT:
            return {...state, totalPostsCount: action.totalPostsCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }

}

export const setPosts = (posts) => ({type: SET_POSTS, posts})
export const setCurrentPage = (currentPage) => ({type: CURRENT_PAGE, currentPage})
export const setPostsTotalCount = (totalPostsCount) => ({type: SET_TOTAL_COUNT, totalPostsCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setKeyword = (keyword) => ({type: SET_KEYWORD, keyword})

export const getPosts = (keyword, currentPage, pageSize) =>
    async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setKeyword(keyword));
        dispatch(setCurrentPage(currentPage));
        let data = await postsAPI.getAllPosts(keyword, currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setPosts(data.content));
        dispatch(setPostsTotalCount(data.totalElements))
    }


export default postsReducer;