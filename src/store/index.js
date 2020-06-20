import Vue from 'vue'
import VueX from 'vuex'


Vue.use(VueX)
export default new VueX.Store({
    state: {
        playList: [],
        PlayHistory: [],
        playStatus: false
    },
    getters: {

    },
    mutations: {
        setPlayList(state, list) {
            state.playList.push(list)
        },
        playStatusChange(state) {
            state.playStatus = !state.playStatus
        }
    },
    actions: {},
    modules: {}
})