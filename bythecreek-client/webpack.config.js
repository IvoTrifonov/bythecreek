const path = require('path');
const rules = [
  {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  },
  {
    test:/\.s?css$/,
    use:['style-loader','css-loader', 'sass-loader']
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
    filename: 'bundle.js'
  },
  module: { rules },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devServer: {
    contentBase: './',
    port: 5000,
  }
}