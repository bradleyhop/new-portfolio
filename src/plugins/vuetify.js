import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#00acc1',
        primaryLight: '#5ddef4',
        primaryDark: '#007c91',
        secondary: '#ff9800',
        secondaryLight: '#ffc947',
        secondaryDark: '#c66900',
      },
    },
  },
});

Vue.use(Vuetify, vuetify);

export default new Vuetify({
});
