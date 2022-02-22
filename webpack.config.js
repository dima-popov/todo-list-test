const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.tsx',
  target: "web",
  mode: "development",
  module: {
    rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: "ts-loader",
        },
  
        {
          test: /\.css$/,
          loader: "css-loader",
        },
      ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "./src/main.css",
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', ".jsx", ".json"],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};


