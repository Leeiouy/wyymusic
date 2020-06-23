import axios from 'axios'


export function request(config) {
    const Axios = axios.create({
        // baseURL: 'http://localhost:3000/',
        // baseURL:'http://musicapi.leanapp.cn',
        baseURL: 'http://music.eleuu.com/',
        timeout: 5000
    })
    Axios.defaults.withCredentials=true

    //拦截器 请求前拦截
    Axios.interceptors.request.use(config => {

        // if (localStorage.getItem('Authorization')) {
        //     config.headers.token = localStorage.getItem('Authorization');
        // }
        return config
  
    }, err => {
        console.log(err);


    })


    return Axios(config)


    //403 登录超时 重新登录
    // axios.interceptors.request.use(function (config) {

    // })

}