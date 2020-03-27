import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import "../node_modules/uikit/src/less/uikit.less";
import "./assets/less/theme.less";
require('@mdi/font/css/materialdesignicons.css');

UIkit.use(Icons);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
