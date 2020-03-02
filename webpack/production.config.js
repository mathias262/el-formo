const root = require('./root.config')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    ...root,
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    }
}
