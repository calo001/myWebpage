const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpack = new HtmlWebpackPlugin({
  template: './assets/index.template.html',
  filename: 'index.html'
});

const htmlWebpackDesigns = new HtmlWebpackPlugin({
  template: './assets/designs.template.html',
  filename: 'designs.html'
});

const htmlWebpackAbout = new HtmlWebpackPlugin({
  template: './assets/about.template.html',
  filename: 'about.html'
});

const htmlWebpackApps = new HtmlWebpackPlugin({
  template: './assets/apps.template.html',
  filename: 'apps.html'
});

module.exports = {
  entry: './assets/javascript/entry.js',
  output: {
    publicPath: '/',
    path: path.join(__dirname, '..'),
    filename: 'dist/javascript/bundle.js'
  },
  mode: 'development',
  plugins: [htmlWebpack, htmlWebpackDesigns, htmlWebpackAbout, htmlWebpackApps],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.jpg$/,
        loader: 'url-loader'
      },
      {
        test: /locales/,
        loader: '@lienfast/i18next-loader'
      }
    ]
  }
}
