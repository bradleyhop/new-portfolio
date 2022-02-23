import Vue from "vue";
import App from "./App.vue";
import VueGtag from "vue-gtag";
import vuetify from "./plugins/vuetify";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(VueGtag, {
  config: { id: "G-PCJSPMG67T" },
});

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
