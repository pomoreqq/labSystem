const sampleModel = require('../models/sampleModel')
const {v4: uuidv4} = require('uuid')
const qrcode = require('qrcode')
const validationError = require('../helpers/validationErrorExtends')
const validateJsonData = require('../helpers/validateStorageJsonData')
const sampleTestsModel = require('../models/sampleTestsModel')

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


const updateSample = async (data, id) => {

    const existingSample = await sampleModel.getSampleById(id);
    if (!existingSample) {
        throw new Error('Próbka o podanym ID nie istnieje');
    }

    const sanitizedData = {
        clientId: data.clientId !== undefined ? data.clientId : existingSample.clientid,
        sampleType: data.sampleType !== undefined ? data.sampleType : existingSample.sampletype,
        storageConditions: data.storageConditions !== undefined ? data.storageConditions : existingSample.storageconditions,
        sampleStatus: data.sampleStatus !== undefined ? data.sampleStatus : existingSample.samplestatus,
        createdBy: data.createdBy !== undefined ? data.createdBy : existingSample.createdby
    };

    
    const updateAction = 'updateStatus'
   
    const updatedSample = await sampleModel.updateSample(
        sanitizedData.clientId,
        sanitizedData.sampleType,
        sanitizedData.storageConditions,
        sanitizedData.sampleStatus,
        sanitizedData.createdBy,
        id
    );

    await sampleModel.insertIntoSampleHistoryUpdateOrDelete(id,updateAction,existingSample,sanitizedData,sanitizedData.createdBy)

    return updatedSample;
};


const deleteSample = async(id) => {

    const existingSample = await sampleModel.getSampleById(id);
    if (!existingSample) {
        throw new Error('Próbka o podanym ID nie istnieje');
    }
     const deleteAction = 'deleteSample'
    await sampleModel.insertIntoSampleHistoryUpdateOrDelete(id,deleteAction,existingSample,null,existingSample.createdby)

    const existingSampleAllTest = await sampleTestsModel.getAllTestsFromSample(id)
    
   

    if (existingSampleAllTest && existingSampleAllTest.length > 0) {
        for ( const test of existingSampleAllTest) {
            await sampleTestsModel.deleteTestFromSample(id,test.id)
            
        }
    }

    
    

    
    
    return await sampleModel.deleteSamples(id);
}


module.exports ={
    getAllSamples,
    getSampleById,
    createSample,
    updateSample,
    deleteSample
}