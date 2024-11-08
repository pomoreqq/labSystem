const db = require('../config/dbConfig');

const getAllInventoryItems = async () => {
  const result = await db.query('SELECT * FROM inventory_items');
  return result.rows;
};

const getInventoryItemById = async (id) => {
  const result = await db.query('SELECT * FROM inventory_items WHERE id = $1', [id]);
  return result.rows[0];
};

const createInventoryItem = async (name, quantity, supplierId) => {
  const result = await db.query(
    'INSERT INTO inventory_items (name, quantity, supplierId) VALUES ($1, $2, $3) RETURNING *',
    [name, quantity, supplierId]
  );
  return result.rows[0];
};

const updateInventoryItem = async (id, name, quantity, supplierId) => {
  const result = await db.query(
    `UPDATE inventory_items SET
      name = COALESCE($1, name),
      quantity = COALESCE($2, quantity),
      supplierId = COALESCE($3, supplierId)
     WHERE id = $4 RETURNING *`,
    [name, quantity, supplierId, id]
  );
  return result.rows[0];
};

const deleteInventoryItem = async (id) => {
  const result = await db.query('DELETE FROM inventory_items WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = {
  getAllInventoryItems,
  getInventoryItemById,
  createInventoryItem,
  updateInventoryItem,
  deleteInventoryItem,
};