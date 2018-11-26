/**
 * 清除旧文件
 * 环境变量
 * scss
 * eslint
 */
process.env.NODE_ENV = 'testing';
const rm = require('rimraf'),
    webpack = require('webpack'),
    env = require('../config/env.testing.js'),
    temp = require('../build/temp.js'),
    baseWebpackConfigs = require('./webpack.base.js'),
    commonWebpack = require('./webpack.common.js');

let appConfig = baseWebpackConfigs.appConfig;
/**
 * 注入环境变量
 */
appConfig.plugins.push(new webpack.DefinePlugin({
    'process.env': env
}));

rm('dist/**/*', function(err) {
    if (err) {
        throw err;
    }
    temp(function(endFn) {
        commonWebpack(appConfig, function(compiler) {
            endFn();
            /**
             * [删除编译scss生成的js]
             */
            rm('dist/**/*_scss.js', {
                glob: true
            }, function(err) {
                if (err) {
                    console.log(err);
                }
            });
            console.log('build testing success!');
        });
    });
});