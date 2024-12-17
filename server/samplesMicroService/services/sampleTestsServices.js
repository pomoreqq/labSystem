const sampleTestsModel = require('../models/sampleTestsModel')




const  addTestToSample = async (sampleId, data) => {
    const {testType,testResult,performedBy} = data;

    return await sampleTestsModel.addTestToSample(sampleId,testType,testResult,performedBy)
}



const getAllTestsFromSample = async(sampleId) => {
    return await sampleTestsModel.getAllTestsFromSample(sampleId)
}


const getTestByIdFromSample = async (sampleId,testId) => {
    
   const result =  await sampleTestsModel.getTestByIdFromSample(sampleId,testId) 
   
   return result
}


const updateTestFromSample = async(sampleId, data, testId) => {
    const {testType, testResult, performedBy,completedAt} = data

    const existingTest = await sampleTestsModel.getTestByIdFromSample(sampleId,testId)

    if (!existingTest) {
        throw new Error("sample with this id doesnt exist in this test")
    }

    const sanitizedData = {
        testType: testType !== undefined ? testType : existingTest.testtype,
        testResult: testResult !== undefined ? testResult : existingTest.testresult,
        performedBy: performedBy !== undefined ? performedBy : existingTest.performedby,
        completedAt: completedAt !== undefined ? performedBy : existingTest.completedat
    }

    const updateAction = 'updateResult'

    

    const updateResult = await sampleTestsModel.updateTestFromSample(sampleId,
        sanitizedData.testType,sanitizedData.testResult,sanitizedData.performedBy,sanitizedData.createdAt,testId)
    
        console.log(updateResult)
    
     await sampleTestsModel.insertIntoSampleHistoryUpdateAndDelete(testId,updateAction,existingTest,updateResult,sanitizedData.performedBy,sampleId)   
    

        return updateResult

    }





const deleteTestFromSample = async (sampleId, testId) => {

    const existingTest = await sampleTestsModel.getTestByIdFromSample(sampleId,testId)

    if (!existingTest) {
        throw new Error('this test doesnt exist')
    }

    const deleteAction = 'deleteTest'
    await sampleTestsModel.insertIntoSampleHistoryUpdateAndDelete(testId,deleteAction,existingTest,null,existingTest.performedby,sampleId)

    return await sampleTestsModel.deleteTestFromSample(sampleId,testId)
   
}


module.exports = {
    addTestToSample,
    deleteTestFromSample,
    updateTestFromSample,
    getAllTestsFromSample,
    getTestByIdFromSample
}