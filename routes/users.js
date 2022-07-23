const router = require('express').Router()
const usersController = require('../controllers/usersController')

//index
router.get('/', usersController.index)

//creating a new user
router.post('/' , usersController.createNewUser)

//updating a user
router.put('/:id' , usersController.updateUser)

//delete user
router.delete('/:id', usersController.deleteUser)



module.exports = router


