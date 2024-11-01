const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')


router.get('/users', userController.getAllUsers)
router.get('/users/:id', userController.getUserById)
router.post('/users',userController.createUser)
router.patch('/users/:id', userController.updateUser)
router.delete('/users/:id', userController.deleteUser)


module.exports = router