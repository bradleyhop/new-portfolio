module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash:5]'
            }
          }]
        }
      ]
    },
  },
};
