const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    port: 3001,
  },
  output: {
    publicPath: "http://localhost:3001/",
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
      name: "app1",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App",
        "./Button": "./src/Button",
     
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
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
