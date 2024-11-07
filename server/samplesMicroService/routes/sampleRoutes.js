const sampleController = require('../controllers/sampleController')

const express = require('express');
const router = express.Router();



router.get('/samples',sampleController.getAllSamples)
router.get('/samples/:id',sampleController.getSampleById)
router.post('/samples',sampleController.createSample)
router.patch('/samples/:id', sampleController.updateSample)
router.delete('/samples/:id',sampleController.deleteSample)


module.exports = router

