const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/tripsController.js')


router.get('/', tripsController.index)
router.get('/', tripsController.tripDetails)
router.post('/', tripsController.createTrip)
router.put('/', tripsController.updateTrip)
router.delete('/', tripsController.deleteTrip)


module.exports = router