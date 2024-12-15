const db = require('../config/dbConfig')


const getSampleTestsHistory = async (sampleId,testId) => {
    const result = await db.query(`SELECT * FROM sampleTestsHistory where sampleId = $1 AND testId = $2`,[sampleId,testId])

    return result.rows
}



module.exports = {
    getSampleTestsHistory

}