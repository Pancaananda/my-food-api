const express = require('express');
const router = express.Router();
const { handleFoodRequest } = require('./handlerFood');

// Rute untuk mendapatkan data makanan berdasarkan nama
router.get('/food/:name', handleFoodRequest);

module.exports = router;
