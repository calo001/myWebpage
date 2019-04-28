const common = require('./webpack.common.js')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'dist/css/[name].[hash].css'
    }),
  ],
  output: {
    publicPath: '.'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {loader: 'html-loader', options: {minimize: true, attrs: false}}
        ]
      }
    ]
  }
})
