const express = require('express');
const router = express.Router();
const dataController = require('../controllers/data.crontroller');

router.get('/', dataController.list);
router.post('/', dataController.create);

router.post('/populate', dataController.populate);

module.exports = router;