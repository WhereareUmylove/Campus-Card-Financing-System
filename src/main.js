import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';

import animate from 'animate.css';
import "./icon/iconfont.css"

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//引入bootstrap样式
// import 'bootstrap/dist/css/bootstrap.css'

const vm = new Vue({
    el:"#app",
    data:{
        
    },
    methods:{

    },
    render:c=>c(App),
    router,
    store
    // store
})
