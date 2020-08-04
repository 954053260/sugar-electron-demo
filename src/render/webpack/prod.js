const Merge = require('webpack-merge');
const BaseConfig = require('./base');

const DevConfig = {
 
};

const webpackConfig = Merge(BaseConfig, DevConfig);

module.exports = webpackConfig;
