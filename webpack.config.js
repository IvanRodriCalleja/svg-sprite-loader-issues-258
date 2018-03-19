const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/',
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                include: path.join(__dirname, 'src'),
                exclude: /(node_modules)/,
                test: /\.js$/,
                loader: 'babel-loader',
                options: { 
                    cacheDirectory: true 
                }
            },
            {
                include: path.join(__dirname, 'src'),
                exclude: /(node_modules)/,
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                options: {
                  extract: true,
                  spriteFileName: 'my-custom-name.svg'
                }
            }
        ]
    },
    plugins: [ 
        new HtmlWebpackPlugin({ template: 'index.template.html' }),
        new SpriteLoaderPlugin()
    ]
}