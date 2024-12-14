const sampleTestController = require('../controllers/sampleTestsController')

const express = require('express');
const router = express.Router();



router.get('/samples/:sampleId/tests',sampleTestController.getAllTestsFromSample)
router.get('/samples/:sampleId/tests/:testId',sampleTestController.getTestByIdFromSample)
router.post('/samples/:sampleId/tests',sampleTestController.addTestToSample)
router.patch('/samples/:sampleId/tests/:testId', sampleTestController.updateTestFromSample)
router.delete('/samples/:sampleId/tests/:testId',sampleTestController.deleteTestFromSample)


module.exports = router
