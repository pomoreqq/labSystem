const db = require('../config/dbConfig')



const getAllSamples = async () => {
    const result = await db.query(`SELECT * from samples`)

    return result.rows
}



const getSampleById = async(id) => {
    const result = await db.query(`SELECT * from samples WHERE id = $1`,[id])

    return result.rows[0]
}


const createSample = async(clientId, sampleType,storageConditions,sampleStatus,createdBy) => {
    const result = await db.query(`INSERT INTO samples (clientId, sampleType, storageConditions, sampleStatus, createdBy) VALUES ($1, $2, $3, $4, $5) RETURNING *`
,[clientId,sampleType,storageConditions,sampleStatus,createdBy])

    return result.rows[0]
}

const updateSampleIdentifer = async (sampleId, identifier,qrCode) => {
    await db.query(`UPDATE samples SET identifier = $1, qrCode = $2 WHERE id = $3`,[identifier,qrCode,sampleId]);
}


const updateSample = async(clientId,sampleType,storageConditions,sampleStatus,createdBy, id) => {
    
    const result = await db.query(`UPDATE samples SET
        clientId = COALESCE($1,clientId),
        sampleType = COALESCE($2,sampleType),
        storageConditions = COALESCE($3,storageConditions),
        sampleStatus = COALESCE($4,sampleStatus),
        createdBy = COALESCE($5,createdBy)
        WHERE id = $6 RETURNING *`, [clientId,sampleType,storageConditions,sampleStatus,createdBy,id])


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
    updateSample,
    updateSampleIdentifer
}