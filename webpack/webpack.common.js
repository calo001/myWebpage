const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlWebpack = new HtmlWebpackPlugin({
  template: "./assets/index.template.html",
  filename: "index.html"
});

const htmlWebpackApplications = new HtmlWebpackPlugin({
  template: "./assets/applications.template.html",
  filename: "applications.html"
});

const htmlWebpackAbout = new HtmlWebpackPlugin({
  template: "./assets/about.template.html",
  filename: "about.html"
});

const htmlWebpackSupport = new HtmlWebpackPlugin({
  template: "./assets/support.template.html",
  filename: "support.html"
});

module.exports = {
  entry: "./assets/javascript/entry.js",
  output: {
    publicPath: "/",
    path: path.join(__dirname, ".."),
    filename: "dist/javascript/bundle.js"
  },
  mode: "development",
  plugins: [htmlWebpack, htmlWebpackApplications, htmlWebpackAbout, htmlWebpackSupport],
  module: {
    rules: [
      {
        test: /\.jpg$/,
        loader: "url-loader"
      },
      {
        test: /locales/,
        loader: "@lienfast/i18next-loader"
      }
    ]
  }
};
