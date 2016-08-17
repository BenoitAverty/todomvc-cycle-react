const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');

const dashboard = new Dashboard();

module.exports = {
  entry: './app/index.js',
  output: {
    path: './app',
    filename: 'app.dist.js',
  },
  plugins: [new DashboardPlugin(dashboard.setData)],
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    quiet: true,
  },
};
