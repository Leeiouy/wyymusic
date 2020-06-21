import Vue from 'vue'
import VueX from 'vuex'


Vue.use(VueX)
export default new VueX.Store({
    state: {
        audioEl: '', //audio元素
        playList: [], //播放列表
        isPlay: false, //是否处于播放状态
        playSongIndex: null, //播放列表index
        currentTime: 0, //当前播放位置秒数
        duration: 0 //音乐总时长
    },
    getters: {},
    mutations: {

        setAudioEL(state, el) {
            state.audioEl = el

        },
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
        isPlay(state) {
            state.isPlay = !state.isPlay
            if (state.isPlay) {
                state.audioEl.pause();
            } else {
                state.audioEl.play()
            }


        },
        currentTimeChange(state, cur) {
            //当前播放位置秒数
            state.currentTime = cur
        },
        getDuration(state, dur) {
            //音乐总时长
            state.duration = dur
        }

    },
    actions: {},
    modules: {}
})