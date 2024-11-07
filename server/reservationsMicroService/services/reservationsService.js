const reservationModel = require('../models/reservationModel');

const getAllReservations = async () => {
  return await reservationModel.getAllReservations();
};

const getReservationById = async (id) => {
  return await reservationModel.getReservationById(id);
};

const createReservation = async (data) => {
  const { equipmentId, userId, startTime, endTime, purpose } = data;
  return await reservationModel.createReservation(equipmentId, userId, startTime, endTime, purpose);
};

const updateReservation = async (data, id) => {
  const { equipmentId, userId, startTime, endTime, purpose } = data;
  return await reservationModel.updateReservation(id, equipmentId, userId, startTime, endTime, purpose);
};

const deleteReservation = async (id) => {
  return await reservationModel.deleteReservation(id);
};

module.exports = {
  getAllReservations,
  getReservationById,
  createReservation,
  updateReservation,
  deleteReservation,
};