module.exports = {
  entry: ['./client/index.js'],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, 
        loader: 'style!css' 
      },
      { 
        test: /\.js$/, 
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ],
  },

  devServer: {
    historyApiFallback: true
  },
  plugins: []
};
