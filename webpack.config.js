module.exports = {
  entry: './app/index.js',
  output: {
    path: './app',
    filename: 'app.dist.js',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
