const express = require('express');
const {
  getBestPrices
} = require('../controllers/priceController');

const router = express.Router();

router.route('/best')
  .get(getBestPrices);

module.exports = router;