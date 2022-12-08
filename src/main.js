import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import websocket from "@/utils/websocket/websocket";

Vue.config.productionTip = false;
Vue.prototype.$websocket = websocket;
Vue.use(ElementUI, { size: "small" });
new Vue({
  router,
  store,
  axios,
  render: (h) => h(App),
}).$mount("#app");
