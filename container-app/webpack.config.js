const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    port: 3000, // change this to 3001 for app1, 3002 for app2, etc.
  },
  output: {
    publicPath: "http://localhost:3000/", // adjust for each app
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container", 
      filename: "remoteEntry.js",
      remotes: {
        app1: "app1@http://localhost:3001/remoteEntry.js"
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: '^17.0.2' // Adjust to the React version you're using
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: '^17.0.2'
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

