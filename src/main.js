// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from 'vue-router';

import iView from 'iview';
import 'iview/dist/styles/iview.css';
import App from "./App";

import store from "./store";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(iView);

new Vue({
  el: "#app",
  template: "<App :title='title'/>",
  store,
  data() {
    return {
      title: "Babel Time Travel"
    };
  },
  components: { App }
});

store.dispatch("registerSw");
