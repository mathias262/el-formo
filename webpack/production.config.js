const root = require('./root.config')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    ...root,
    mode: 'production',
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    }
}
