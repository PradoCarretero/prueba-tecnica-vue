import Vue from "vue";
import App from "./App.vue";
import VueAxios from "vue-axios";
import Axios from "axios";
import router from "./router";
import store from "./store.js";
import "./input.css";

Vue.config.productionTip = false;
Vue.use(VueAxios, Axios);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
