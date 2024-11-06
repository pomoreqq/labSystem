const sampleTestsModel = require('../models/sampleTestsModel')




const  addTestToSample = async (sampleId, data) => {
    const [testType,testResult,performedBy, completedAt] = data;

    return await sampleTestsModel.addTestToSample(sampleId,testType,testResult,performedBy,completedAt)
}



const getAllTestsFromSample = async(sampleId) => {
    return await sampleTestsModel.getTestByIdFromSample(sampleId)
}


const getTestByIdFromSample = async (sampleId,testId) => {
    return await sampleTestsModel.getTestByIdFromSample(sampleId,testId) 
}


const updateTestFromSample = async(sampleId, data, testId) => {
    const [testType, testResult, performedBy, completedAt] = data

    return await sampleTestsModel.updateTestFromSample(sampleId,testType,testResult,performedBy,completedAt, testId)
}


const deleteTestFromSample = async (sampleId, testId) => {
    return await sampleTestsModel.deleteTestFromSample(sampleId,testId)
}