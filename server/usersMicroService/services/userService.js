


const userModel = require('../models/userModel');


async function getAllUsers() {
    return await userModel.getAllUsers();
};


async function getUserById(id){
    return await userModel.getUserById(id)
};

async function createUser(data) {
    const {firstName,lastName,email,password,roleId} = data;
    return await userModel.createUser(firstName,lastName,email,password,roleId);

}

async function updateUser(data,id){
    const {firstName,lastName,email,password,roleId} = data;
    return await userModel.updateUser(firstName,lastName,email,password,roleId,id)
}

async function deleteUser(id) {
    return await userModel.deleteUser(id)
}


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}