import {createSelector} from "reselect";

const getPostsSelector = (state) => {
    return state.postsPage.posts
}

export const getAllPosts = createSelector(getPostsSelector, (posts) => {
    return posts
})

export const getKeyword = (state) => {
    return state.postsPage.keyword
}

export const getPageSize = (state) => {
    return state.postsPage.pageSize
}

export const getTotalPostsCount = (state) => {
    return state.postsPage.totalPostsCount
}

export const getCurrentPage = (state) => {
    return state.postsPage.currentPage
}

export const getIsFetching = (state) => {
    return state.postsPage.isFetching
}