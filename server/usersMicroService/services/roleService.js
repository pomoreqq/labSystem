const roleModel = require('../models/roleModel')


const getAllRoles = async () => {
    return await userModel.getAllRoles();
}


const getRoleById = async (id) => {
    return await userModel.getRoleById(id)
}


const createRole = async(data) => {
    const {roleName, permissions} = data;

    return await roleModel.createRole(roleName,permissions);
}


const updateUser = async(data,id) => {
    const {roleName, permissions} = data;
    return await roleModel.updateRole(roleName,permissions,id)

}


const deleteRole = async(id) => {
    return await roleModel.deleteRole(id);
}


module.exports = {
    getAllRoles,
    getRoleById,
    createRole,
    updateUser,
    deleteRole
}