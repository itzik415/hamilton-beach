const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const browserConfig = {
    entry: './src/browser/index.js', // Where the app starts
    output: {
        path: path.resolve(__dirname, 'public'), // creating a folder name dist in the courent directory
        filename: 'bundle.js', // a file that will be create inside the dist folder
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader" },
            { test: /\.(s*)css$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ]}
        ]
    },
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: "true"
        })
    ]
}

const serverConfig = {
    entry: './src/server/index.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
      path: __dirname,
      filename: 'server.js',
      publicPath: '/'
    },
    module: {
      rules: [
        { test: /\.(js)$/, use: 'babel-loader' },
        { test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader" },
            { test: /\.(s*)css$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ]}
      ]
    },
    mode: 'production',
    plugins: [
      new webpack.DefinePlugin({
        __isBrowser__: "false"
      })
    ]
  }
  
  module.exports = [browserConfig, serverConfig]