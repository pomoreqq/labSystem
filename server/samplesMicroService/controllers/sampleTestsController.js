const sampleTestService = require('../services/sampleTestsServices')


const addTestToSample = async (req,res) => {
    try {
       
        const test = await sampleTestService.addTestToSample(req.params.sampleId, req.body)

        if (!test) {
            return res.status(404).json({
                message:'cannot create a test to sample'
            })
        }

        res.status(200).json({
            message: `test to sampleId ${req.params.sampleId} created successfully`,
            test: test
        })

    } catch (e) {
        res.status(500).json({
            message: ' something went wrong',
            errorMessage: e
        })
    }

}



const getAllTestsFromSample = async (req,res) => {
    try {
        const allTests = await sampleTestService.getAllTestsFromSample(req.params.sampleId)

        if (!allTests) {
            return res.status(404).json({
                message: 'Cannot find test to sampleId: ' + req.params.sampleId
            })
        }

        res.status(200).json({
            message: 'tests founded to sampleId' + req.params.sampleId,
            tests: allTests
        })
    } catch (e) {
        res.status(500).json({
            message: 'something went wrong',
            errorMessage: e
        })
    }
}


const getTestByIdFromSample = async(req,res) => {
    try {
      
        const test = await sampleTestService.getTestByIdFromSample(req.params.sampleId, req.params.testId)

        if (!test) {
            return res.status(404).json({
                message: 'cannot find a test with ' + req.params.testId + 'in sample with id ' + req.params.sampleId
            })
        }

        res.status(200).json({
            message: 'found a test in sample',
            test: test
        })

    } catch (e) {
        res.status(500).json({
            message: 'something went wrong',
            errorMessage: e.message

        })
    }
}



const updateTestFromSample = async (req,res) => {
    try {

        const updatedTest = await sampleTestService.updateTestFromSample(req.params.sampleId, req.body, req.params.testId)
        if (!updatedTest) {
            return res.status(404).json({
                message: 'test not found'
            })
        }

        res.status(200).json({
            message: 'test updated',
            test: updatedTest
        })

    } catch (e) {
        res.status(500).json({
            message: 'something went wrong',
            errorMessage: e
        })
    }
}


const deleteTestFromSample = async(req,res) => {
    try {
        const deletedTest = await sampleTestService.deleteTestFromSample(req.params.sampleId, req.params.testId)

         if(!deletedTest) {
            return res.status(404).json({
                message: 'test not found',
            })
         }

         res.status(200).json({
            message: 'test deleted correctly',
            test: deletedTest
         })
    } catch (e) {
        res.status(500).json({
            message: 'something went wrong',
            errorMessage : e
        })
    }
}

module.exports = {
    deleteTestFromSample,
    updateTestFromSample,
    addTestToSample,
    getAllTestsFromSample,
    getTestByIdFromSample
}