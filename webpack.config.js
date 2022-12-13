const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      "@utils": path.resolve(__dirname, "src/libs/renderer/utils"),
      "@state": path.resolve(__dirname, "src/state"),
      "@browserRouter": path.resolve(__dirname, "src/"),
      "@PostItem": path.resolve(__dirname, "src/components/PostItem"),
      "@PostsLoading": path.resolve(__dirname, "src/components/PostsLoading"),
      "@PostList": path.resolve(__dirname, "src/components/PostList"),
      "@Pagination": path.resolve(__dirname, "src/components/Pagination"),
      "@postService": path.resolve(__dirname, "src/services/postService"),
      "@entities": path.resolve(__dirname, "src/entities"),
      "@requester": path.resolve(__dirname, "./src/libs/requester"),
      "@store": path.resolve(__dirname, "./src/libs/store"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@renderer": path.resolve(__dirname, "./src/libs/renderer"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
    extensions: [".ts", ".js", ".html"],
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/public/index.html",
      base: "/",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    historyApiFallback: true,
    port: 9000,
    hot: true,
  },
};
