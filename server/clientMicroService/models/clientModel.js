const db = require('../config/dbConfig');

const getAllClients = async () => {
  const result = await db.query('SELECT * FROM clients');
  return result.rows;
};

const getClientById = async (id) => {
  const result = await db.query('SELECT * FROM clients WHERE id = $1', [id]);
  return result.rows[0];
};

const createClient = async (name, email, phoneNumber) => {
  const result = await db.query(
    'INSERT INTO clients (name, email, phoneNumber) VALUES ($1, $2, $3) RETURNING *',
    [name, email, phoneNumber]
  );
  return result.rows[0];
};

const updateClient = async (id, name, email, phoneNumber) => {
  const result = await db.query(
    `UPDATE clients SET 
      name = COALESCE($1, name),
      email = COALESCE($2, email),
      phoneNumber = COALESCE($3, phoneNumber)
     WHERE id = $4 RETURNING *`,
    [name, email, phoneNumber, id]
  );
  return result.rows[0];
};

const deleteClient = async (id) => {
  const result = await db.query('DELETE FROM clients WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

const getClientSamples = async (clientId) => {
  const result = await db.query(
    'SELECT * FROM samples WHERE clientId = $1',
    [clientId]
  );
  return result.rows;
};

module.exports = {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
  getClientSamples,
};
