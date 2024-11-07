const db = require('../config/dbConfig');

const getAllEquipment = async () => {
  const result = await db.query('SELECT * FROM equipment');
  return result.rows;
};

const getEquipmentById = async (id) => {
  const result = await db.query('SELECT * FROM equipment WHERE id = $1', [id]);
  return result.rows[0];
};

const createEquipment = async (name, category, status, location) => {
  const result = await db.query(
    'INSERT INTO equipment (name, category, status, location) VALUES ($1, $2, $3, $4) RETURNING *',
    [name, category, status, location]
  );
  return result.rows[0];
};

const updateEquipment = async (id, name, category, status, location) => {
  const result = await db.query(
    `UPDATE equipment SET
      name = COALESCE($1, name),
      category = COALESCE($2, category),
      status = COALESCE($3, status),
      location = COALESCE($4, location)
     WHERE id = $5 RETURNING *`,
    [name, category, status, location, id]
  );
  return result.rows[0];
};

const deleteEquipment = async (id) => {
  const result = await db.query('DELETE FROM equipment WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = {
  getAllEquipment,
  getEquipmentById,
  createEquipment,
  updateEquipment,
  deleteEquipment,
};