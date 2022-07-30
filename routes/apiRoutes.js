const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/api/airports', apiController.findAirports);





module.exports = router;