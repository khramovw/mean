module.exports.overview = function(req, res) {
    res.status(200).json({
        message: 'Working overview controller',
        login: true
    });
}

module.exports.analytics = function(req, res) {
    res.status(200).json({
        message: 'Working analytics controller',
        register: true
    });
}
