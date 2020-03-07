const root = require('./root.config')

module.exports = {
    ...root,
    mode: 'development',
    devtool: 'inline-source-map'
}
