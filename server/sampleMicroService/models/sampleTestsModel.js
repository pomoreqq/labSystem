const db = require('../config/dbConfig')



const addTestToSample = async (sampleId,testType,testResult,performedBy,completedAt) => {

    const result = await db.query(`INSERT INTO sampletests (sampleId,testType,testResult,performedBy,completedAt) VALUES ($1,$2,$3,$4,$5) RETURNING *`,[sampleId,testType,testResult,performedBy,completedAt])

    return result.rows[0]

}



const getAllTestsFromSample = async (sampleId) => {
    const result = await db.query(`SELECT * FROM sampletests WHERE sampleId = $1`, [sampleId])

    return result.rows
}

const getTestByIdFromSample = async (sampleId,testId) => {
    const result = await db.query(`SELECT * from sampletests WHERE sampleId = $1 AND testId = $2`,[sampleId,testId])

    return result.rows[0]
}


const updateTestFromSample = async( sampleId,testType,testResult,performedBy,completedAt,testId) => {
    const result = await db.query(`UPDATE sampletests SET
    sampleId = COALESCE($1,sampleId),
    testType = COALESCE($2,testType),
    testResult = COALESCE($3, testResult),
    performedBy = COALESCE($4, performedBy),
    completedAt = COALESCE($5, completedAt)
    WHERE sampleId = $1 AND testId = $6`, [sampleId,testType,testResult,performedBy,completedAt,testId])
    return result.rows[0]
}


const deleteTestFromSample = async(sampleId, testId) => {
    const result = await db.query(`DELETE from sampletests WHERE sampleId = $1 AND testId = $2`, [sampleId,testId])

    return result.rows[0]
}



module.exports = {
    getAllTestsFromSample,
    getTestByIdFromSample,
    addTestToSample,
    deleteTestFromSample,
    updateTestFromSample
}