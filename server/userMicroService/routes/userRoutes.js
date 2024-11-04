const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const roleController = require('../controllers/roleController')


router.get('/users', userController.getAllUsers)
router.get('/users/:id', userController.getUserById)
router.post('/users',userController.createUser)
router.patch('/users/:id', userController.updateUser)
router.delete('/users/:id', userController.deleteUser)
router.get('/roles', roleController.getAllRoles)
router.get('/roles/:id', roleController.getRoleById)
router.post('/roles',roleController.createRole)
router.patch('/roles/:id', roleController.updateRole)
router.delete('/roles/:id', roleController.deleteRole)


module.exports = router
