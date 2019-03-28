import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import VueResource from "vue-resource";
Vue.use(VueResource);

export function getInformation() {
    http
      .get("information", {
        params: { number: localStorage.getItem("login") }
      })
      .then(res => {
        this.$store.commit("upData",res.body.code)
      });
  }