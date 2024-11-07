const userService = require('../services/userService');


async function  getAllUsers(req,res) {
    try {
        const users = await userService.getAllUsers()
        res.status(200).json({
            users: users
        })
    } catch (e) {
        res.status(500).json({
            message: 'someting went wrong',
            errorMessage: e.message
        })
    }
}



async function getUserById(req,res) {
    
    try {
        const user = await userService.getUserById(req.params.id);

        if (!user) {
           return res.status(404).json({
                message: 'user not found!'
            })
        }

        res.status(200).json({
            message: ' user found!',
            user: user
        })
    } catch (e) {
        res.status(500).json({
            message: 'something went wrong',
            errorMessage: e.message
        })
    }
}


async function createUser(req,res) {
    try {
        const user = await userService.createUser(req.body)

        res.status(201).json({
            message: ' user created sucessfully!',
            user: user
        })
    } catch (e) {
        res.status(500).json({
            message: 'something went wrong',
            errorMessage: e.message
        })
    }
}


async function updateUser(req,res) {
    try {
        const user = await userService.updateUser(req.body,req.params.id)

        if (!user) {
            return res.status(404).json({
                message: 'user not found'
            })
        }
        res.status(200).json({
            message: 'user updated sucessfully'
        })
    } catch (e) {
        res.status(500).json({
            message: 'something went wrong',
            errorMessage: e.message
        })
    }
}


async function deleteUser(req,res) {
    try {
        const user = await userService.deleteUser(req.params.id);

        if (!user) {
           return res.status(404).json({
                message: 'user not found!'
            })
        }

        res.status(200).json({
            message: ' user deleted!',
            user: user
        })
    } catch (e) {
        res.status(500).json({
            message: 'something went wrong',
            errorMessage: e.message
        })
    }
}


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};