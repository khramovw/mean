const express = require('express');
const controller = require('../controlers/position');
const router = express.Router();


router.get('/categoryId', controller.geByCategory);

router.post('/', controller.create);

router.patch('/:id', controller.update);

router.delete('/:id', controller.remove);

module.exports = router;
