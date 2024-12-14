const sampleHistoryService = require('../services/sampleHistoryServices')


const getSampleHistory = async (req, res) => {

    try {

        const history = await sampleHistoryService.getSampleHistory(req.params.sampleId)

        if (!history || history.length === 0) {
            return res.status(404).json({
                message: 'History of this sample doesnt exist'
            })
        }

        res.status(200).json({
            message: 'History: ',
            history: history
        })

    } catch (e) {   
        res.status(500).json({
            message: 'someting went wrong',
            errorMessage: e.message
        })
    }

}


module.exports = {
    getSampleHistory
}