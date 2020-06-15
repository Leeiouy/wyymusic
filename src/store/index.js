import Vue from 'vue'
import VueX from 'vuex'


Vue.use(VueX)
export default new VueX.Store({
    state: {
        Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
        user: {}
    },
    getters: {

    },
    mutations: {
        setToken(state, token) {
            state.Authorization = token;
            localStorage.setItem('Authorization', token);
        },
        setProfile(state, profile) {

            Vue.set(state, 'user', profile)



            console.log(state);

        }
    },
    actions: {},
    modules: {}
})