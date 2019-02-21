const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.css$/,
        use: "raw-loader"
      },
      {
        test: /\.scss$/,
        use: ["raw-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js", ".html", ".css", ".scss"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
