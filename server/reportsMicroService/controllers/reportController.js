const reportService = require('../services/reportService');

const getAllReports = async (req, res) => {
  try {
    const reports = await reportService.getAllReports();
    res.status(200).json({ reports });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', errorMessage: e.message });
  }
};

const getReportById = async (req, res) => {
  try {
    const report = await reportService.getReportById(req.params.id);
    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }
    res.status(200).json({ report });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', errorMessage: e.message });
  }
};

const createReport = async (req, res) => {
  try {
    const report = await reportService.createReport(req.body);
    res.status(201).json({ message: 'Report created successfully', report });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', errorMessage: e.message });
  }
};

const deleteReport = async (req, res) => {
  try {
    const report = await reportService.deleteReport(req.params.id);
    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }
    res.status(200).json({ message: 'Report deleted successfully', report });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', errorMessage: e.message });
  }
};

module.exports = {
  getAllReports,
  getReportById,
  createReport,
  deleteReport,
};