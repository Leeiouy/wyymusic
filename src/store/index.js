import Vue from 'vue'
import VueX from 'vuex'


Vue.use(VueX)
export default new VueX.Store({
    state: {
        audioEl: '', //audio元素
        playList: [], //播放列表
        isPlay: true, //是否处于播放状态
        playSongIndex: null, //播放列表index
        currentTime: 0, //当前播放位置秒数
        duration: 0, //音乐总时长
        listShow: false //播放列表弹出层是否显示
    },
    getters: {},
    mutations: {
        // 将audio元素保存
        setAudioEL(state, el) {
            state.audioEl = el
        },
        // 给一首音乐到音乐列表
        setPlayList(state, list) {

            // 判断现有数组是否有这个数据，没有才会push数据，findIndex会返回满足条件的数据下标
            let index = state.playList.findIndex(n => n.id == list.id)

            if (index == -1) {
                state.playList.push(list)
                state.playSongIndex = state.playList.length - 1
            } else {
                state.playSongIndex = index
            }
        },
        //添加歌单到音乐列表
        setPlayLists(state, list) {
            let index = state.playList.findIndex(n => n.id == list.id)
            if (index == -1) {
                state.playList.push(list)
                // 现在播放列表为空就从0开始播放
                if (!state.playSongIndex) {
                    state.playSongIndex = 0
                }
            }
        },
        //现在是否为play状态 控制css样式
        isPlay(state, now) {
            if (now) {
                state.isPlay = true
                return
            }
            state.isPlay = !state.isPlay
            if (state.isPlay) {
                state.audioEl.play()
            } else {
                state.audioEl.pause();
            }
        },
        //当前播放位置秒数
        currentTimeChange(state, cur) {
            state.currentTime = cur
        },
        //音乐总时长
        getDuration(state, dur) {
            state.duration = dur
        },
        //下一首音乐
        nextPlay(state) {
            let index = state.playSongIndex
            index++
            let list = state.playList
            if (list[index++]) {
                state.playSongIndex++
            } else {
                state.playSongIndex = 0
            }
        },
        //上一首音乐
        PreviouPlay(state) {
            let index = state.playSongIndex
            index--

            if (index !== -1) {
                state.playSongIndex--
            } else {

                console.log(state.playList.length);
                
                state.playSongIndex = state.playList.length-1
            }

        },
        //播放列表弹出层是否显示
        isListShow(state) {
            state.listShow = !state.listShow
        },
        songPlay(state, index) {
            state.playSongIndex = index


        }

    },
    actions: {},
    modules: {}
})