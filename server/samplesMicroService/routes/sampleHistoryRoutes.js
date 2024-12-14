const sampleHistoryController = require('../controllers/sampleHistoryController')

const express = require('express')


const router = express.Router()


router.get('/samples/:sampleId/history', sampleHistoryController.getSampleHistory)


module.exports = router