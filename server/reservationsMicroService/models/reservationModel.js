const db = require('../config/dbConfig');

const getAllReservations = async () => {
  const result = await db.query('SELECT * FROM reservations');
  return result.rows;
};

const getReservationById = async (id) => {
  const result = await db.query('SELECT * FROM reservations WHERE id = $1', [id]);
  return result.rows[0];
};

const createReservation = async (equipmentId, userId,  purpose) => {
  const result = await db.query(
    'INSERT INTO reservations (equipmentId, userId, purpose) VALUES ($1, $2, $3) RETURNING *',
    [equipmentId, userId,  purpose]
  );
  return result.rows[0];
};

const updateReservation = async (id, equipmentId, userId, startTime, endTime, purpose) => {
  const result = await db.query(
    `UPDATE reservations SET
      equipmentId = COALESCE($1, equipmentId),
      userId = COALESCE($2, userId),
      startTime = COALESCE($3, startTime),
      endTime = COALESCE($4, endTime),
      purpose = COALESCE($5, purpose)
     WHERE id = $6 RETURNING *`,
    [equipmentId, userId, startTime, endTime, purpose, id]
  );
  return result.rows[0];
};

const deleteReservation = async (id) => {
  const result = await db.query('DELETE FROM reservations WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = {
  getAllReservations,
  getReservationById,
  createReservation,
  updateReservation,
  deleteReservation,
};
