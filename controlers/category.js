module.exports.getAll = function(req, res) {
    res.status(200).json({
        message: 'Working get All  controller',
        category: true
    });
}

module.exports.getById = function(req, res) {
    res.status(200).json({
        message: 'Working get By Id controller',
        category: true
    });
}

module.exports.remove = function(req, res) {
    res.status(200).json({
        message: 'Working remove controller',
        category: true
    });
}

module.exports.create = function(req, res) {
    res.status(200).json({
        message: 'Working create controller',
        category: true
    });
}

module.exports.update = function(req, res) {
    res.status(200).json({
        message: 'Working update controller',
        category: true
    });
}
