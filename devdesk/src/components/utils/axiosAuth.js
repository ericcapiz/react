import axios from 'axios'

export const axiosAuth = () => {
    const token = window.localStorage.getItem('token');

    return axios.create({
        baseURL: '',
        headers: {
            Authorization: token
        }
    })
}