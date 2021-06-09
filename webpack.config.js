let mode = "development";
let target = "web";

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}

module.exports = {
  mode: mode,
  target: target,
  entry: {
    main: path.resolve(__dirname, "./src/app.js"),
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },

  plugins: [new MiniCssExtractPlugin()],

  devtool: "source-map",

  devServer: {
    contentBase: "./dist",
    hot: true,
  },
};
