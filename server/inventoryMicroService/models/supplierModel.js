const db = require('../config/dbConfig');

const getAllSuppliers = async () => {
  const result = await db.query('SELECT * FROM suppliers');
  return result.rows;
};

const getSupplierById = async (id) => {
  const result = await db.query('SELECT * FROM suppliers WHERE id = $1', [id]);
  return result.rows[0];
};

const createSupplier = async (name, contactInfo) => {
  const result = await db.query(
    'INSERT INTO suppliers (name, contactInfo) VALUES ($1, $2) RETURNING *',
    [name, contactInfo]
  );
  return result.rows[0];
};

const updateSupplier = async (id, name, contactInfo) => {
  const result = await db.query(
    `UPDATE suppliers SET
      name = COALESCE($1, name),
      contactInfo = COALESCE($2, contactInfo)
     WHERE id = $3 RETURNING *`,
    [name, contactInfo, id]
  );
  return result.rows[0];
};

const deleteSupplier = async (id) => {
  const result = await db.query('DELETE FROM suppliers WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = {
  getAllSuppliers,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
};