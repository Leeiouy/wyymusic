import axios from 'axios'

export function request(config) {
    const Axios = axios.create({
        // baseURL: 'http://localhost:3000/',
        // baseURL:'http://musicapi.leanapp.cn',
        baseURL: 'http://music.eleuu.com/',
        timeout: 5000,
        withCredentials: true
    })
    return Axios(config)
}