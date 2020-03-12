const root = require('./root.config')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    ...root,
    mode: 'production',
    stats: 'normal',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    mangle: true
                }
            })
        ],
        splitChunks: {
            cacheGroups: {
                vendor: {
                    enforce: false
                }
            }
        }
    }
}
