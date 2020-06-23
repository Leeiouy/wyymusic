import {
    request
} from '../request'



export function getSongData(id) {
    return request({
        url: "/song/detail",
        params: {
            ids: id
        }
    })
}