const root = require('./root.config')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    ...root,
    mode: 'production',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        open: true,
        compress: true,
        port: 1337
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'El formo',
            template: path.resolve(__dirname, '../src/templates/index.html')
        })
    ]
}
