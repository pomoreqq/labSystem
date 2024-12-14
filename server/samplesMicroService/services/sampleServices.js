const sampleModel = require('../models/sampleModel')
const {v4: uuidv4} = require('uuid')
const qrcode = require('qrcode')
const validationError = require('../helpers/validationErrorExtends')

const validateJsonData = require('../helpers/validateStorageJsonData')

const getAllSamples =  async () => {
    return await sampleModel.getAllSamples();
}



const getSampleById = async(id) => {
    return await sampleModel.getSampleById(id);
}


const createSample = async(data) => {
    const {clientId, sampleType,storageConditions, sampleStatus,createdBy} = data;

    const allowedTypes = [ 'Chemical', 'Biological', 'Microbiological', 'Toxicological', 
        'Environmental', 'Food', 'Pharmaceutical', 'Cosmetological', 
        'Genetical', 'Material', 'Industrial']
    

    const allowedStatus = ['Registered', 'ReadyToAnalysis', 'InAnalysis', 'analysisCompleted', 'approved', 'released', 'archivized']
      const result = await validateJsonData.validateStorageJsonData(storageConditions)
    

      if(!result.isValid) {
        throw new validationError(result.errors)
      }
     
   

    if (!allowedTypes.includes(sampleType)) {
        throw new Error('Not avaliable sampleType')
    }

    if (!allowedStatus.includes(sampleStatus)) {
        throw new Error('invalid sample status')
    }

   const sample =  await sampleModel.createSample(clientId,sampleType,storageConditions,sampleStatus,createdBy);

   const formattedDate = new Date(sample.recivedat).toISOString().split('T')[0]
   const uniqueId = uuidv4()
   const fullIdentifier = `SAMPLE-${formattedDate}-${uniqueId}`

   const qrData = `SAMPLE-${fullIdentifier}|Type:${sampleType}|Status:${sampleStatus}|Date:${formattedDate}`;


   const qrCode = await qrcode.toDataURL(qrData)



   await sampleModel.updateSampleIdentifer(sample.id,fullIdentifier,qrCode)
   return {...sample, identifier: fullIdentifier, qrcode: qrCode}

}


const updateSample = async(data,id) => {
   
    const {clientId, sampleType,storageConditions, status,createdBy} = data;
    console.log("Data passed to updateSample:", clientId, sampleType, storageConditions, status, createdBy, id);
    return await sampleModel.updateSample(clientId,sampleType,storageConditions,status,createdBy,id);
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