const sampleModel = require('../models/sampleModel')


const getAllSamples =  async () => {
    return await sampleModel.getAllSamples();
}



const getSampleById = async(id) => {
    return await sampleModel.getSampleById(id);
}


const createSample = async(data) => {
    const [clientId, sampleType,storageConditions, status,creadtedBy] = data;
    return await sampleModel.createSample(clientId,sampleType,storageConditions,status,creadtedBy);
}


const updateSample = async(data,id) => {
    const [clientId, sampleType,storageConditions, status,creadtedBy] = data;
    return await sampleModel.createSample(clientId,sampleType,storageConditions,status,creadtedBy,id);
}


const deleteSample = async(id) => {
    return await sampleModel.deleteSamples(id);
}


module.exports ={
    getAllSamples,
    getSampleById,
    createSample,
    updateSample,
    deleteSample
}