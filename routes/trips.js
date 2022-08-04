const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/tripsController.js')


router.get('/', tripsController.index)
router.get('/:id', tripsController.tripDetails)
router.post('/', tripsController.createTrip)
router.put('/:id', tripsController.updateTrip)
router.delete('/:id', tripsController.deleteTrip)


module.exports = router






