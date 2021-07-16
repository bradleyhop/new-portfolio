module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "@/assets/scss/main.scss";
        `,
      },
    },
  },
  // publicPath: process.env.NODE_ENV === 'production' ? '/newportfolio-build/' : '/',
};
