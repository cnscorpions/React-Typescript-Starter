const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: path.join(__dirname, "/src/index.tsx"),
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  },

  devServer: {
    contentBase: path.resolve(__dirname, "/dist"),
    port: 17839,
    compress: true,
    hot: true
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/index.html"
    })
  ],

  // 不开server，本地运行
  externals: {
    // react: "React",
    // "react-dom": "ReactDOM"
  }
};
