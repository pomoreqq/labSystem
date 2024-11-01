const express = require('express');
const router = express.Router();
const sampleController = require('../controllers/sampleController');

router.get('/samples', sampleController.getAllSamples);
router.get('/samples/:id', sampleController.getSampleById);
router.post('/samples', sampleController.createSample);
router.put('/samples/:id', sampleController.updateSample);
router.delete('/samples/:id', sampleController.deleteSample);

module.exports = router;