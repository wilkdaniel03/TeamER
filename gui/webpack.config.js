const path = require("path")
require("dotenv").config()

const HtmlWebpackPlugin = require("webpack-html-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")

const ExitWithMessage = (msg, tip) => {
  console.error(`Error: ${msg}\n${tip}`)
  process.exit(1)
}

if (process.env.MODE == undefined || process.env.PORT == undefined) {
  ExitWithMessage(
    "Cannot load environment variables.",
    `Try to check ${__filename} file.`
  )
}

module.exports = {
  mode: process.env.MODE,

  entry: path.resolve(__dirname, "./src"),

  resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'] },

  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, "dist"), 
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(js|ts)x?$/i,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin( {template: path.resolve(__dirname, "./src/index.html")} )
  ],

  devServer: {
    port: process.env.PORT
  }
}
