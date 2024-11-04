const db = require('../config/dbconfig');


const getAllRoles = async () => {
    const result = await db.query(`SELECT * from roles`);

    return result.rows;
}


const createRole = async (roleName,permissions) => {
    const result = await db.query(`INSERT INTO roles (roleName,permissions) VALUES ($1,$2) RETURNING *`,[roleName,permissions])
    return result.rows[0]
}


const getRoleById = async(id) => {
    const result = await db.query(`SELECT * FROM roles WHERE id = $1`, [id])
    return result.rows[0]
}


const updateRole = async(roleName,permissions,id) => {
    const result = await db.query(`UPDATE roles SET 
        roleName = COALESCE($1,roleName),
        permissions = COALESCE($1,permissions),
         WHERE id = $3 RETURNING *`, [roleName,permissions, id] )


    return result.rows[0]
}


const deleteRole = async(id) => {
    const result = await db.query(`DELETE FROM roles where id = $1 RETURNING *`, [id]
    )
    return result.rows[0]
}


module.exports = {
    getAllRoles,
    getRoleById,
    createRole,
    updateRole,
    deleteRole
}