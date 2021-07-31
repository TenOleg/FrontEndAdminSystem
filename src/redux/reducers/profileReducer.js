import {usersAPI} from "../../components/api/api";
import {SET_COMMENT, SET_USER_PROFILE} from "../common/constants/constants";

let initialState = {
    profile: [],
    status: [
        {id: 1, name: "ACTIVE"},
        {id: 2, name: "BANNED"},
        {id: 3, name: "DELETED"},
    ],
    userComment: []

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_COMMENT: {
            return {...state, userComment: action.userComment}
        }
        default:
            return state;
    }

}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setComment = (userComment) => ({type: SET_COMMENT, userComment})


//thunk
export const getProfile = (userId) => async (dispatch) => {
    let data = await usersAPI.getProfileById(userId)
    dispatch(setUserProfile(data));
}

export const changeStatus = (userId, value) => async (dispatch) => {
    let data = await usersAPI.changeStatus(userId, value);
    dispatch(setUserProfile(data))
}

export const saveComment = (userId, status, comment) =>  async (dispatch) => {
    let data = await usersAPI.postComment(userId, status, comment)
    dispatch(setComment(data))
}

export default profileReducer;