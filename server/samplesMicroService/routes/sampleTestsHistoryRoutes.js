const sampleTestsHistoryController = require('../controllers/sampleTestsHistoryController')

const express = require('express')


const router = express.Router()


router.get('/samples/:sampleId/tests/:testId/history', sampleTestsHistoryController.getSampleTestsHistory)


module.exports = router