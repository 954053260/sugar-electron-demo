const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const appPath = path.join(__dirname, '../pages');
const items = fs.readdirSync(appPath);
const entry = {};
items.forEach(item => {
  const itemPath = path.join(appPath, item);
  if (fs.statSync(itemPath).isDirectory()) {
    entry[item] = path.join(itemPath);
  }
});
module.exports = {
  entry: entry, // 入口文件
  output: {
    filename: '[name].js', // 编译后的文件
    libraryTarget: 'umd',
    path: path.join(__dirname, '../../build')
  },
  target: 'electron-renderer',
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react']
          }
        }
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        use: 'file-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './images/'
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'initial',
          priority: 2,
          minChunks: 2
        }
      }
    }
  },
  plugins: [
    ...newHtmlPlugin(entry),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsOptions: { source: false }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
function newHtmlPlugin(entry) {
  let list = [];
  Object.keys(entry).forEach(key => {
    list.push(new HtmlWebpackPlugin({
      template: `${entry[key]}/index.html`,
      filename: `${key}.html`,
      hash: false,
      chunks: [key, 'common']
    }));
  });
  return list;
}
