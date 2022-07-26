// *** CURRENTLY WORKING ON THIS ***

const express = require('express')
const router = express.Router()
const authenticationController = require('../controllers/authenticationController')

router.post('/login' , authenticationController.loginUser)

router.post('/signup', authenticationController.signupUser)



module.exports = router

