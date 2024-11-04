const roleService = require('../services/roleService');

const getAllRoles = async (req,res) => {
    try {
        const roles = await roleService.getAllRoles();
        res.status(200).json({
            message: 'All roles: ',
            roles:roles,
        })
    } catch (e) {
        res.status(500).json({
            message:'Something went wrong',
            errorMessage: e
        })
    }
}



const getRoleById = async (req,res) => {
    try {
        const role = await roleService.getRoleById(req.params.id)

        if (!role) {
            return res.status(404).json({
                message: 'role not found!'
            })
        }


        res.status(200).json({
            message: 'Role found: ',
            role: role
        })
    } catch (e) {
        res.status(500).json({
            message:'something went wrong',
            errorMessage: e
        })
    }
}


async function createRole(req,res) {
    try {
        const role = await roleService.createUser(req.body)

        res.status(201).json({
            message: ' role created sucessfully!',
            role: role
        })
    } catch (e) {
        res.status(500).json({
            message: 'something went wrong',
            errorMessage: e.message
        })
    }
}


async function updateRole(req,res) {
    try {
        const role = await roleService.updateUser(req.body,req.params.id)

        if (!role) {
            return res.status(404).json({
                message: 'role not found'
            })
        }
        res.status(200).json({
            message: 'role updated sucessfully'
        })
    } catch (e) {
        res.status(500).json({
            message: 'something went wrong',
            errorMessage: e.message
        })
    }
}


async function deleteRole(req,res) {
    try {
        const role = await roleService.deleteUser(req.params.id);

        if (!role) {
           return res.status(404).json({
                message: 'user not found!'
            })
        }

        res.status(200).json({
            message: ' role deleted!',
            role: role
        })
    } catch (e) {
        res.status(500).json({
            message: 'something went wrong',
            errorMessage: e.message
        })
    }
}


module.exports = {
    getAllRoles,
    getRoleById,
    createRole,
    updateRole,
    deleteRole
}