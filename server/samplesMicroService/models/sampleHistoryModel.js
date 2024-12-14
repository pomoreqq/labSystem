const db = require('../config/dbConfig')


const getSampleHistory = async (sampleId) => {
    const result = await db.query(`SELECT * FROM sampleHistory where sampleId = $1`,[sampleId])

    return result.rows
}



module.exports = {
    getSampleHistory

}