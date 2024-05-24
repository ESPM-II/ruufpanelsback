const express = require('express');
const router = express.Router();
const panelsController = require('../controllers/panelsController');

router.post('/calculate', panelsController.calculatePanels);

module.exports = router;