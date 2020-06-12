import {
    request
} from '../request'


export function songList(songListID) {
    return request({
            url: "/playlist/detail",
            params: {
                id: songListID
            }
        })
        .then(res => {
            if (res.status == "200") {
                let data = res.data.playlist.trackIds;
                let listID = data.reduce((total, currentValue) => {
                    return (total += currentValue.id + ",");
                }, "");
                /* 
                未登录状态只能获取不完整的歌单,登录后是完整的,
                拿全部 trackIds 再请求一次 song/detail 拼接iD请求资源
                */
                listID = listID.slice(0, listID.length - 1);

                /* 
                返回一个promise
                */
                return request({
                    url: "/song/detail",
                    params: {
                        ids: listID
                    }
                })
            }
        }).catch(err => {
            console.log(err);
        });


}