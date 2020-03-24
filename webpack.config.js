const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const rules = [{
    test: /\.tsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  },
  {
    test: /\.s?css$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
  },
  {
    test: /\.(png|j?g|svg|gif)?$/,
    use: 'file-loader'
  }
];

module.exports = {
  target: 'web',
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    contentBase: './',
    historyApiFallback: true, 
    port: 5000,
  }
}