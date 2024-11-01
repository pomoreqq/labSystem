const sampleService = require('../services/sampleService');

const getAllSamples = async (req, res) => {
    try {
        const samples = await sampleService.getAllSamples();
        res.status(200).json(samples);
    } catch (e) {
        res.status(500).json({ message: 'Something went wrong', error: e.message });
    }
};

const getSampleById = async (req, res) => {
    try {
        const sample = await sampleService.getSampleById(req.params.id);
        if (!sample) return res.status(404).json({ message: 'Sample not found!' });
        res.status(200).json(sample);
    } catch (e) {
        res.status(500).json({ message: 'Something went wrong', error: e.message });
    }
};

const createSample = async (req, res) => {
    try {
        const sample = await sampleService.createSample(req.body);
        res.status(201).json(sample);
    } catch (e) {
        res.status(500).json({ message: 'Something went wrong', error: e.message });
    }
};

const updateSample = async (req, res) => {
    try {
        const sample = await sampleService.updateSample(req.params.id, req.body);
        if (!sample) return res.status(404).json({ message: 'Sample not found!' });
        res.status(200).json(sample);
    } catch (e) {
        res.status(500).json({ message: 'Something went wrong', error: e.message });
    }
};

const deleteSample = async (req, res) => {
    try {
        const sample = await sampleService.deleteSample(req.params.id);
        if (!sample) return res.status(404).json({ message: 'Sample not found!' });
        res.status(200).json({ message: 'Sample deleted successfully', sample });
    } catch (e) {
        res.status(500).json({ message: 'Something went wrong', error: e.message });
    }
};

module.exports = {
    getAllSamples,
    getSampleById,
    createSample,
    updateSample,
    deleteSample
};