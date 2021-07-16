import Vue from 'vue';
import Vuetify from 'vuetify/lib';

const vuetify = new Vuetify({
  theme: {
    themes: {
      /*
       * light: {
       *   primary: '#2196F3',
       *   primaryLight: '#5ddef4',
       *   primaryDark: '#007c91',
       *   secondary: '#ffa000',
       *   secondaryLight: '#ffc947',
       *   secondaryDark: '#c66900',
       * },
       */
      light: {
        primary: '#424242',
        primaryLight: '#6d6d6d',
        primaryDark: '#1b1b1b',
        secondary: '#f47b00',
        secondaryLight: '#ffac42',
        secondaryDark: '#ba4c00',
      },
    },
  },
});

Vue.use(Vuetify, vuetify);

export default new Vuetify({
});
