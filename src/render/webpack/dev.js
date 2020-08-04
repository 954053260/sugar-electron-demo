const Merge = require('webpack-merge');
const path = require('path');
const BaseConfig = require('./base');

const DevConfig = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../../build'), // 编译好的文件放在这里
    compress: true,
    port: 9000 // 本地开发服务器端口
  }
};

const webpackConfig = Merge(BaseConfig, DevConfig);
console.log(webpackConfig)
module.exports = webpackConfig;
