let mode = "development";
let target = "web";

const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
];

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
} else {
  plugins.push(new ReactRefreshWebpackPlugin());
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
    assetModuleFilename: "img/[hash][ext][query]",
  },

  module: {
    rules: [
      {
        test: /.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource", // ""asset/inline" or "asset""
        /* parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024,
          },
        }, */
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "",
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },

  plugins: plugins,
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: "source-map",

  devServer: {
    contentBase: "./dist",
    hot: true,
  },
};
