const express = require('express');
const router = express.Router();

// Require the controllers 
const product_controller = require('../controllers/product.controller');

// a simple test url to check that all of our files are commiunicating correctly.
router.get('/test', product_controller.test);
router.post('/create', product_controller.product_create);

module.exports = router;