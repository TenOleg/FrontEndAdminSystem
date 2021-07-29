import {authAPI} from "../../components/api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    username: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.payload
            }

        default:
            return state;
    }

}

export const setUserData = (userId, username, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, username, isAuth}
});

export const getUserData = () => async (dispatch) => {
    let res = await authAPI.currentUser()
    if (res.data.resultCode === 0) {
        let {id, username} = res.data.data;
        dispatch(setUserData(id, username, true))
    }

}

export const login = (username, password) => async (dispatch) => {
    let res = await authAPI.auth(username, password)
    if (res.data.resultCode === 0) {
        dispatch(getUserData())
        localStorage.setItem('user', JSON.stringify(res.data.currentUser))
    }
}

export const logout = () => (dispatch) => {
    dispatch(setUserData(null, null, false))
    localStorage.removeItem('user')
}

export default authReducer;