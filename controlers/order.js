module.exports.getAll = function(req, res) {
    res.status(200).json({
        message: 'Working get All controller',
        order: true
    });
}

module.exports.create = function(req, res) {
    res.status(200).json({
        message: 'Working get By Id controller',
        order: true
    });
}
