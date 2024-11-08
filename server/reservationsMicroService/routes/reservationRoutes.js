const express = require('express');
const router = express.Router();

const reservationsController = require('../controllers/reseravtionController')

router.get('/reservations', reservationsController.getAllReservations)
router.get('reservations/:id', reservationsController.getReservationById)
router.post('/reservations',reservationsController.createReservation)
router.patch('/reservations/:id', reservationsController.updateReservation)
router.delete('/reservations/:id', reservationsController.deleteReservation)


module.exports = router