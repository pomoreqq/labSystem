const db = require('../config/dbconfig');


const getAllUsers = async () => {
    const result = await db.query(`SELECT * FROM users`);
    return result.rows
}



const createUser = async(firstName,lastName,email,password,roleId) => {
    const result = await db.query(`INSERT INTO users (firstName,lastName,email,password,roleId)
    VALUES ($1,$2,$3,$4,$5) RETURNING *`, [firstName,lastName,email,password,roleId])

    return result.rows[0]
}

const getUserById = async (id) => {
    console.log("ID in service:", id);
    const result = await db.query(`SELECT * FROM users WHERE id = $1`, [id]);
    return result.rows[0];
};

const updateUser = async(firstName,lastName,email,password,roleId,id) => {
    const result = await db.query(`UPDATE users SET 
        firstName = COALESCE($1,firstName),
        lastName = COALESCE($2,lastName),
        email = COALESCE($3,email),
        password = COALESCE($4,password),
        roleId = COALESCE($5,roleId)
        WHERE id = $6 RETURNING *`,[firstName,lastName,email,password,roleId,id])

    return result.rows[0]
}


const deleteUser = async (id) => {
    const result = await db.query(`DELETE FROM users where id = $1 RETURNING *`, [id])

    return result.rows[0]
}


module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
}

