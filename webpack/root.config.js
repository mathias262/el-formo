const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, '../src/index.tsx'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            react: 'preact/compat',
            'react-dom': 'preact/compat'
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'swc-loader'
                }
            },
            {
                test: /\.svg$/,
                loader: '@svgr/webpack'
            }
        ]
    },
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
