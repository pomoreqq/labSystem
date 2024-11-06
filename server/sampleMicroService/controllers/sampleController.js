const sampleService = require('../services/sampleServices');


async function  getAllSamples(req,res) {
    try {
        const samples = await sampleService.getAllsamples()
        res.status(200).json({
            samples: samples
        })
    } catch (e) {
        res.status(500).json({
            message: 'someting went wrong',
            errorMessage: e.message
        })
    }
}



async function getSampleById(req,res) {
    
    try {
        const sample = await sampleService.getSampleById(req.params.id);

        if (!sample) {
           return res.status(404).json({
                message: 'sample not found!'
            })
        }

        res.status(200).json({
            message: ' sample found!',
            sample: sample
        })
    } catch (e) {
        res.status(500).json({
            message: 'something went wrong',
            errorMessage: e.message
        })
    }
}


async function createSample(req,res) {
    try {
        const sample = await sampleService.createSample(req.body)

        res.status(201).json({
            message: ' sample created sucessfully!',
            sample: sample
        })
    } catch (e) {
        res.status(500).json({
            message: 'something went wrong',
            errorMessage: e.message
        })
    }
}


async function updateSample(req,res) {
    try {
        const sample = await sampleService.updateSample(req.body,req.params.id)

        if (!sample) {
            return res.status(404).json({
                message: 'sample not found'
            })
        }
        res.status(200).json({
            message: 'sample updated sucessfully',
            sample: sample,
        })
    } catch (e) {
        res.status(500).json({
            message: 'something went wrong',
            errorMessage: e.message
        })
    }
}


async function deleteSample(req,res) {
    try {
        const sample = await sampleService.deleteSample(req.params.id);

        if (!sample) {
           return res.status(404).json({
                message: 'sample not found!'
            })
        }

        res.status(200).json({
            message: ' sample deleted!',
            sample: sample
        })
    } catch (e) {
        res.status(500).json({
            message: 'something went wrong',
            errorMessage: e.message
        })
    }
}


module.exports = {
    getAllSamples,
    getSampleById,
    createSample,
    updateSample,
    deleteSample
};