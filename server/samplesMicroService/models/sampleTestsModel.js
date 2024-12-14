const db = require('../config/dbConfig')



const addTestToSample = async (sampleId,testType,testResult,performedBy) => {

    const result = await db.query(`INSERT INTO sampletests (sampleId,testType,testResult,performedBy) VALUES ($1,$2,$3,$4) RETURNING *`,[sampleId,testType,testResult,performedBy])

    return result.rows[0]

}



const getAllTestsFromSample = async (sampleId) => {
    const result = await db.query(`SELECT * FROM sampleTests WHERE sampleId = $1`, [sampleId])

    return result.rows[0]
}

const getTestByIdFromSample = async (sampleId,id) => {
    
    const result = await db.query(`SELECT * FROM sampleTests WHERE sampleId = $1 AND id= $2`,[sampleId,id])
    
    return result.rows[0]
}


const updateTestFromSample = async( sampleId,testType,testResult,performedBy,completedAt,id) => {
    const result = await db.query(`UPDATE sampletests SET
    sampleId = COALESCE($1,sampleId),
    testType = COALESCE($2,testType),
    testResult = COALESCE($3, testResult),
    performedBy = COALESCE($4, performedBy),
    completedAt = COALESCE($5, completedAt)
    WHERE sampleId = $1 AND id = $6 RETURNING *`, [sampleId,testType,testResult,performedBy,completedAt,id])
    return result.rows[0]
}


const deleteTestFromSample = async(sampleId, id) => {
    const result = await db.query(`DELETE from sampleTests WHERE sampleId = $1 AND id = $2 RETURNING *`, [sampleId,id])

    return result.rows[0]
}



module.exports = {
    getAllTestsFromSample,
    getTestByIdFromSample,
    addTestToSample,
    deleteTestFromSample,
    updateTestFromSample
}