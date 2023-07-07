const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    index: ['./src/index.ts'],
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  devServer: {
    port: 3000

  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
  ],
  // devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env'
              ]
            }
          }
        ]
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript'
              ]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts']
  }
}