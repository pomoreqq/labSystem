const db = require('../config/dbConfig');

const getAllReports = async () => {
  const result = await db.query('SELECT * FROM reports');
  return result.rows;
};

const getReportById = async (id) => {
  const result = await db.query('SELECT * FROM reports WHERE id = $1', [id]);
  return result.rows[0];
};

const createReport = async (reportType, generatedBy, filePath) => {
  const result = await db.query(
    'INSERT INTO reports (reportType, generatedBy, filePath, createdAt) VALUES ($1, $2, $3, NOW()) RETURNING *',
    [reportType, generatedBy, filePath]
  );
  return result.rows[0];
};

const deleteReport = async (id) => {
  const result = await db.query('DELETE FROM reports WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = {
  getAllReports,
  getReportById,
  createReport,
  deleteReport,
};
