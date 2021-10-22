import {analyticsAPI} from "../../components/api/api";
import {
    SET_NEW_POSTS_AMOUNT,
    SET_NEW_USERS,
    SET_NEW_USERS_AMOUNT, SET_USERS_STATISTICS, SET_POSTS_STATISTICS,
    SET_USERS_AMOUNT,
    SET_POSTS_AMOUNT, SET_NEW_POSTS
} from "../common/constants/constants";

let initialState = {
    usersStatistics: [],
    postsStatistics: [],
    newPosts: [],
    newUsers: [],
    usersAmt: [],
    postsAmt: [],
    newUsersAmt: [],
    newPostsAmt: []
}

const analyticsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_STATISTICS:
            return {...state, usersStatistics: action.usersStatistics}
        case SET_POSTS_STATISTICS:
            return {...state, postsStatistics: action.postsStatistics}
        case SET_USERS_AMOUNT:
            return {...state, usersAmt: action.usersAmt}
        case SET_POSTS_AMOUNT:
            return {...state, postsAmt: action.postsAmt}
        case SET_NEW_USERS_AMOUNT:
            return {...state, newUsersAmt: action.newUsersAmt}
        case SET_NEW_POSTS_AMOUNT:
            return {...state, newPostsAmt: action.newPostsAmt}
        case SET_NEW_USERS:
            return {...state, newUsers: action.newUsers}
        case SET_NEW_POSTS:
            return {...state, newPosts: action.newPosts}
        default:
            return state;
    }
}

export const setUsersAmt = (usersAmt) => ({type: SET_USERS_AMOUNT, usersAmt})
export const setPostsAmt = (postsAmt) => ({type: SET_POSTS_AMOUNT, postsAmt})
export const setNewUsersAmt = (newUsersAmt) => ({type: SET_NEW_USERS_AMOUNT, newUsersAmt})
export const setNewPostsAmt = (newPostsAmt) => ({type: SET_NEW_POSTS_AMOUNT, newPostsAmt})
export const setNewUsers = (newUsers) => ({type: SET_NEW_USERS, newUsers})
export const setNewPosts = (newPosts) => ({type: SET_NEW_POSTS, newPosts})
export const setUsersStatistics = (usersStatistics) => ({type: SET_USERS_STATISTICS, usersStatistics})
export const setPostsStatistics = (postsStatistics) => ({type: SET_POSTS_STATISTICS, postsStatistics})

export const getUsersAnalytics = () =>
    async (dispatch) => {
        let data = await analyticsAPI.getUsersStatics()
        dispatch(setUsersAmt(data.usersAmt))
        dispatch(setNewUsersAmt(data.newUsersAmt))
        dispatch(setNewUsers(data.newUsers))
        dispatch(setUsersStatistics(data.usersStatistics))
    }

export const getPostsAnalytics = () =>
    async (dispatch) => {
        let data = await analyticsAPI.getPostsStatics()
        dispatch(setNewPosts(data.newPosts))
        dispatch(setPostsStatistics(data.postsStatistics))
        dispatch(setNewPostsAmt(data.newPostsAmt))
        dispatch(setPostsAmt(data.postsAmt))
    }

export default analyticsReducer;