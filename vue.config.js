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
  chainWebpack: config => {
    config.plugin('VuetifyLoaderPlugin').tap(args => [{
      match (originalTag, { kebabTag, camelTag, path, component }) {
        if (kebabTag.startsWith('core-')) {
          return [camelTag, `import ${camelTag} from '@/components/core/${camelTag.substring(4)}.vue'`]
        }
      },
      progressiveImages: true,
    }])
  },
  // publicPath: process.env.NODE_ENV === 'production' ? '/newportfolio-build/' : '/',
};
