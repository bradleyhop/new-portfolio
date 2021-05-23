import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#2196F3',
        primaryLight: '#5ddef4',
        primaryDark: '#007c91',
        secondary: '#ffa000',
        secondaryLight: '#ffc947',
        secondaryDark: '#c66900',
      },
    },
  },
});

Vue.use(Vuetify, vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
});
