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

// to use @mdi/js fonts within Vuetify's builtin framework
export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
  },
});
