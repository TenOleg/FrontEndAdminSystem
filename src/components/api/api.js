import axios from "axios";

const BASE_URL = 'http://localhost:8080/'

axios.interceptors.request.use(config => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
        const token = user.tokenType + user.accessToken;
        config.headers.Authorization = token;
    }
    return config;
});

export const authAPI = {
    auth(username, password) {
        return axios.post(BASE_URL + `login`, {username, password}).then(res => res.data)
    },
    currentUser() {
        return axios.get(BASE_URL + `authenticated`)
    }
}

export const usersAPI = {
    getAllUsers(userStatus, keyword, currentPage, pageSize) {
        return axios.get(BASE_URL + `users`, {
            params: {
                status: userStatus,
                keyword: keyword,
                pageNo: currentPage,
                pageSize: pageSize
            }
        }).then(res => res.data)
    },

    getProfileById(userId) {
        return axios.get(BASE_URL + `user/` + userId).then(res => res.data.data)
    },

    changeStatus(userId, value) {
        return axios.patch(BASE_URL + `user/` + userId + '?status=' + value).then(res => res.data.data)
    },
    postComment(userId, status, comment){
        return axios.post(BASE_URL + `user`, {userId, status, comment}).then(res => res.data)
    }
}

export const postsAPI = {
    getAllPosts(postsStatus, keyword, currentPage, pageSize){
        return axios.get(BASE_URL + `posts`,{
            params: {
                status: postsStatus,
                keyword: keyword,
                pageNo: currentPage,
                pageSize: pageSize
            }
        }).then(res => res.data)
    }
}

export const analyticsAPI = {
    getUsersStatics(){
        return axios.get(BASE_URL + 'analytics/users').then(res => res.data.data)
    },
    getPostsStatics(){
        return axios.get(BASE_URL + 'analytics/posts').then(res => res.data.data)
    }
}

