const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

router.get('/clients', clientController.getAllClients);
router.get('/clients/:id', clientController.getClientById);
router.post('/clients', clientController.createClient);
router.patch('/clients/:id', clientController.updateClient);
router.delete('/clients/:id', clientController.deleteClient);
router.get('/clients/:id/samples', clientController.getClientSamples);

module.exports = router;
