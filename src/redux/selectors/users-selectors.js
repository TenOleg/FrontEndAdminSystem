import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.usersPage.users
}

export const getAllUsers = createSelector(getUsersSelector, (users) => {
    return users
})

export const getKeyword = (state) => {
    return state.usersPage.keyword
}

export const getUserStatus =(state) => {
    return state.usersPage.userStatus
}

export const getMessage = (state) => {
    return state.usersPage.message
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}