/**
 * 清除旧文件
 * 环境变量
 * scss
 * eslint
 */
const path = require('path'),
    rm = require('rimraf'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

let common = {
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../', 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(scss|sass)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    // use: ['css-loader?minimize', 'sass-loader']
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    }
};
let appConfig = {
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../', 'dist')
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                context: path.resolve(__dirname, '../', 'src'),
                from: '**/*',
                ignore: ['**/*.scss']
            }
        ])
    ]
};
module.exports = {
    commonConfig: common,
    appConfig
};