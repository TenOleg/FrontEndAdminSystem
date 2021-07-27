import {usersAPI} from "../components/api/api";

const SET_USERS = 'SET_USERS';
const CURRENT_PAGE = 'CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_KEYWORD = 'SET_KEYWORD';

let initialState = {
    users: [],
    keyword: '',
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_KEYWORD:
            return {...state, keyword: action.keyword}
        case SET_USERS:
            return {...state, users: action.users}
        case CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setKeyword = (keyword) => ({type:SET_KEYWORD, keyword})

//thunk
export const getUsers = (currentPage, pageSize) =>
    async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.data));
        dispatch(setUsersTotalCount(data.totalCount));
    }

export const findUserByUsername = (keyword = initialState.keyword, currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    let data = await usersAPI.getUserByUsername(keyword, currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setKeyword(keyword))
    dispatch(setUsers(data.data))
    dispatch(setUsersTotalCount(data.totalCount))
}

export default usersPageReducer;