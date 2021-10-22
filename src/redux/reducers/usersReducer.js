import {usersAPI} from "../../components/api/api";
import {
    CURRENT_PAGE,
    SET_KEYWORD,
    SET_MESSAGE, SET_STATUS,
    SET_TOTAL_COUNT,
    SET_USERS,
    TOGGLE_IS_FETCHING
} from "../common/constants/constants";

let initialState = {
    users: [],
    userStatus: 'ACTIVE',
    keyword: '',
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    message: ''
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUS:
            return {...state, userStatus: action.userStatus}
        case SET_KEYWORD:
            return {...state, keyword: action.keyword}
        case SET_USERS:
            return {...state, users: action.users}
        case SET_MESSAGE:
            return {...state, message: action.message}
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
export const setKeyword = (keyword) => ({type: SET_KEYWORD, keyword})
export const setMessage = (message) => ({type: SET_MESSAGE, message})
export const setUserStatus = (userStatus) => ({type: SET_STATUS, userStatus})

//thunk
export const getUsers = (userStatus, keyword, currentPage, pageSize) =>
    async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        dispatch(setUserStatus(userStatus))
        let data = await usersAPI.getAllUsers(userStatus, keyword, currentPage, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setKeyword(keyword));
        dispatch(setUsers(data.data.data));
        dispatch(setUsersTotalCount(data.data.totalCount));
        if (data.resultCode === 1) {
            dispatch(setMessage(data.data.message))
        }
    }


export default usersReducer;