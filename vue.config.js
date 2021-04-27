module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            'file-loader?limit=10000',
            'img-loader'
          ]
        }
      ]
    },
  },
};
