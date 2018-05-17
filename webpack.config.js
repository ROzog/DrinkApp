var path = require("path");
var Html = require("html-webpack-plugin");

module.exports = {
  entry: "./js/main.jsx",
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, "build")
  },
  devServer: {
    inline: true,

    port: 3005
  },
  mode: "development",
  watch: true,
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "stage-2", "react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new Html({
      filename: "index.html",
      template: "./index.html"
    })
  ]
};
