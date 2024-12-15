const sampleTestsHistoryModel = require('../models/sampleTestsHistoryModel')



const getSampleTestsHistory =  async (sampleId,testId) => {
    return await sampleTestsHistoryModel.getSampleTestsHistory(sampleId,testId);
}




module.exports = {
    getSampleTestsHistory
}

