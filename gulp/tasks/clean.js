var del = require('del')

module.exports = function(gulp, plugins, config) {

    var glob = [
        config.paths.dist.fonts,
        config.paths.dist.js,
        config.paths.dist.css
    ]

    // Must be synchronous!
    return del.sync(glob)

}
