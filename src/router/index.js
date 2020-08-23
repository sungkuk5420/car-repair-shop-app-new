import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(VueRouter);

import firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyBozDFmvFQsND73Qm5R0E9vJVSriqKzIxo",
  authDomain: "carrepairshop-f398e.firebaseapp.com",
  databaseURL: "https://carrepairshop-f398e.firebaseio.com",
  projectId: "carrepairshop-f398e",
  storageBucket: "carrepairshop-f398e.appspot.com",
  messagingSenderId: "516814046131",
  appId: "1:516814046131:web:5c5ee7f890be4f255b01c6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */
export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  });

  return Router;
}
