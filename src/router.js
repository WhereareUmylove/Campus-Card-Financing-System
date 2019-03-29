import Vue from "vue";
import VueRouter from 'vue-router';

import Home from "./components/aside/welcome.vue"
import Balance from "./components/aside/balance.vue";
import Consumption from "./components/aside/consumption.vue";
import Person from "./components/aside/person.vue";
import Rechange from "./components/aside/rechange.vue";
import Reissue from "./components/aside/reissue.vue";
import ChangePwd from "./components/aside/changepwd.vue";
import Advice from "./components/aside/advice.vue";
import Problem from "./components/aside/problem.vue";

Vue.use(VueRouter);
//创建一个VueRouter对象
const router = new VueRouter({
    routes: [
        {
            path: "/",
            redirect: "/欢迎"
        },
        {
            path: "/欢迎",
            name: "Home",
            component: Home

        },
        {
            path: "/余额查询",
            component: Balance
        },
        {
            path: "/消费记录查询",
            component: Consumption
        },
        {
            path: "/个人信息查询",
            component: Person
        },
        {
            path: "/余额充值",
            component: Rechange
        },
        {
            path: "/挂失/取消挂失",
            component: Reissue
        },
        {
            path: "/修改密码",
            component: ChangePwd
        },
        {
            path: "/我有建议",
            component: Advice
        },
        {
            path: "/故障提交",
            component: Problem
        }
    ]
})
router.beforeEach((to, from, next) => {
    next();

})
router.afterEach((to, from) => {

})
export default router;
