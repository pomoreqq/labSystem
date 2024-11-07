const db = require('../config/dbConfig')



const getAllSamples = async () => {
    const result = await db.query(`SELECT * from samples`)

    return result.rows
}



const getSampleById = async(id) => {
    const result = await db.query(`SELECT * from samples WHERE id = $1`,[id])

    return result.rows[0]
}


const createSample = async(cilentId, sampleType,storageConditions,status,createdBy) => {
    const result = await db.query(`INSERT INTO samples VALUES (clientId,sampleType,storageConditions,status,creadtedBy) RETURNING *`,[cilentId,sampleType,storageConditions,status,createdBy])

    return result.rows[0]
}


const updateSample = async(clientId,sampleType,storageConditions,status,createdBy, id) => {
    const result = await db.query(`UPDATE samples SET
        clientId = COALESCE($1,clientId),
        sampleType = COALESCE($2,sampleType),
        storageConditions = COALESCE($3,storageConditions),
        status = COALESCE($4,status),
        createdBy = COALESCE($5,createdBy),
        WHERE id = $6 RETURNING *`, [clientId,sampleType,storageConditions,status,createdBy,id])


        return result.rows[0]
}



const deleteSamples = async(id) => {
    const result = await db.query(`DELETE from samples where id = $1 RETURNING *`, [id])

    return result.rows[0]
}


module.exports = {
    getAllSamples,getSampleById,
    createSample,
    deleteSamples,
    updateSample
}