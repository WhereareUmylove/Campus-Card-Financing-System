import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import VueResource from "vue-resource";
Vue.use(VueResource);

import axios from 'axios'
// Vue.prototype.$http = axios;

// 可以在组件中通过this.$store.state.xx 来访问store中的数据
var store = new Vuex.Store({
    //state相当于组件中的data
    state: {
        inf: {
            "number": null,
            "name": null,
            "college": null,
            "zhuanye": null,
            "qinshi": null,
            "state": null
        },
        balance: null,
        record: []

    },
    //如果要修改store中state的值，需要调用 mutations提供的方法，可以通过this.$store.commit('方法名')来调用
    mutations: {
        changeState(state) {
            state.inf.state = !state.inf.state;
        },
        upData(state, newState) {
            state.inf = newState;
        },
        showBalance(state, newBalance) {
            state.balance = newBalance;
        },
        changeRecord(state, newRecord) {
            state.record = newRecord ;
        }
        //mutations函数参数列表中最多支持两个参数，其中参数1是state； 参数2是通过commit提交过来的参数；
    },
    getters: {
        //这里的getters只负责对外提供数据，不负责修改数据，如果想要修改 state 中的数据需要在mutations中修改
        showInfo: function (state) {
            return state;
        }
    },
    actions: {
        updataConsumption({ commit }) {
            axios
                .get("consumption", {
                    params: { number: localStorage.getItem("login") }
                })
                .then(res => {
                    let tem = [];
                    for (let i = 0; i < res.data.code.length; i++) {
                        tem.push(res.data.code[i]);
                    }
                    commit("changeRecord", tem);
                    commit("showBalance", res.data.code[0].balance);
                });
        }
    }
});

export default store;