import axios from 'axios'

export function request(config) {

    const Axios = axios.create({
        base: '',
        timeout: 5000
    })

    return Axios(config)
}