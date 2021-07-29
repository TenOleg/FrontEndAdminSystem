import axios from "axios";

const BASE_URL = 'http://localhost:8080/'

axios.interceptors.request.use(config => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        const token = 'Bearer_' + user.accessToken;
        config.headers.Authorization = token;
    }
    return config;
});

export const authAPI = {
    auth(username, password) {
        return axios.post(BASE_URL + `login`, {username, password})
    },
    currentUser() {
        return axios.get(BASE_URL + `authenticated`)
    }
}

export const usersAPI = {
    getUsers(keyword, currentPage, pageSize) {
        return (
            axios.get(BASE_URL + `users?keyword=${keyword}&pageNo=${currentPage}&pageSize=${pageSize}`).then(res => res.data)
        )
    },

    getProfileById(userId) {
        return (
            axios.get(BASE_URL + `user/` + userId).then(res => res.data.data)
        )
    },

    changeStatus(userId, value) {
        return (
            axios.patch(BASE_URL + `user/` + userId + "?status=" + value).then(res => res.data.data)
        )
    }
}

export const postsAPI = {
    getPosts(keyword, currentPage, pageSize){
        return(
            axios.get(BASE_URL + `posts?keyword=${keyword}&pageNo=${currentPage}&pageSize=${pageSize}`).then(res => res.data.data)
        )
    }
}

