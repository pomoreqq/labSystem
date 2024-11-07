const reservationService = require('../services/reservationService');

const getAllReservations = async (req, res) => {
  try {
    const reservations = await reservationService.getAllReservations();
    res.status(200).json({ reservations });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', errorMessage: e.message });
  }
};

const getReservationById = async (req, res) => {
  try {
    const reservation = await reservationService.getReservationById(req.params.id);
    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    res.status(200).json({ reservation });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', errorMessage: e.message });
  }
};

const createReservation = async (req, res) => {
  try {
    const reservation = await reservationService.createReservation(req.body);
    res.status(201).json({ message: 'Reservation created successfully', reservation });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', errorMessage: e.message });
  }
};

const updateReservation = async (req, res) => {
  try {
    const reservation = await reservationService.updateReservation(req.body, req.params.id);
    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    res.status(200).json({ message: 'Reservation updated successfully', reservation });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', errorMessage: e.message });
  }
};

const deleteReservation = async (req, res) => {
  try {
    const reservation = await reservationService.deleteReservation(req.params.id);
    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    res.status(200).json({ message: 'Reservation deleted successfully', reservation });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', errorMessage: e.message });
  }
};

module.exports = {
  getAllReservations,
  getReservationById,
  createReservation,
  updateReservation,
  deleteReservation,
};