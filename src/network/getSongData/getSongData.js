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

export function getAllData(arr) {
    //将歌单列表数组id传进来，获取每首歌的数据，并且传入VueX
    arr.forEach((v) => {
        getSongData(v.id).then(res => {
            let result = res.data.songs[0]
            this.$store.commit('setPlayLists', result, true)
        })
    });

}