const reportModel = require('../models/reportModel');

const getAllReports = async () => {
  return await reportModel.getAllReports();
};

const getReportById = async (id) => {
  return await reportModel.getReportById(id);
};

const createReport = async (data) => {
  const { reportType, generatedBy, filePath } = data;
  return await reportModel.createReport(reportType, generatedBy, filePath);
};

const deleteReport = async (id) => {
  return await reportModel.deleteReport(id);
};

module.exports = {
  getAllReports,
  getReportById,
  createReport,
  deleteReport,
};
