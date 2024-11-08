const supplierModel = require('../models/supplierModel');

const getAllSuppliers = async () => {
  return await supplierModel.getAllSuppliers();
};

const getSupplierById = async (id) => {
  return await supplierModel.getSupplierById(id);
};

const createSupplier = async (data) => {
  const { name, contactInfo } = data;
  return await supplierModel.createSupplier(name, contactInfo);
};

const updateSupplier = async (data, id) => {
  const { name, contactInfo } = data;
  return await supplierModel.updateSupplier(id, name, contactInfo);
};

const deleteSupplier = async (id) => {
  return await supplierModel.deleteSupplier(id);
};

module.exports = {
  getAllSuppliers,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
};
