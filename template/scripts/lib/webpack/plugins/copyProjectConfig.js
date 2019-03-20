/**
 * 复制项目配置文件
 */

const ENV = process.env.PRJ_ENV,
  {envComp} = require('../../utils'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  conf = require('../../../etc'),
  rePkgConfig = require('../../utils/rePkgConfig');

module.exports = envComp('development') ? [] : [new CopyWebpackPlugin([
  {
    context: process.cwd(),
    from: `src/${conf[ENV].pkgConfigName}`,
    to: conf[ENV].codePath,
    transform(content) {
      return rePkgConfig(content.toString());
    }
  }
])];