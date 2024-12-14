const sampleHistoryModel = require('../models/sampleHistoryModel')



const getSampleHistory =  async (sampleId) => {
    return await sampleHistoryModel.getSampleHistory(sampleId);
}




module.exports = {
    getSampleHistory
}

