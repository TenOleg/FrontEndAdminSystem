import {usersAPI} from "../../components/api/api";
import {CURRENT_PAGE, SET_KEYWORD, SET_TOTAL_COUNT, SET_USERS, TOGGLE_IS_FETCHING} from "../common/constants/constants";

let initialState = {
    users: [],
    keyword: '',
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_KEYWORD:
            return {...state, keyword: action.keyword}
        case SET_USERS:
            return {...state, users: action.users}
        case CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
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
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setKeyword = (keyword) => ({type:SET_KEYWORD, keyword})

//thunk
export const getUsers = (keyword, currentPage, pageSize) =>
    async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setKeyword(keyword));
        dispatch(setCurrentPage(currentPage));
        let data = await usersAPI.getUsers(keyword, currentPage, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.data));
        dispatch(setUsersTotalCount(data.totalCount));
    }

export default usersReducer;