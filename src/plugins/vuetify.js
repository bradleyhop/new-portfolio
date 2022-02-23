// load in material icons for production preformance
import "@mdi/font/css/materialdesignicons.css";
// load vue and vuetify
import Vue from "vue";
import Vuetify from "vuetify/lib";

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#424242",
        primaryLight: "#fafafa",
        primaryDark: "#373737",
        secondary: "#f47b00",
        secondaryLight: "#ffac42",
        secondaryDark: "#ba4c00",
      },
    },
  },
});

Vue.use(Vuetify, vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
});
