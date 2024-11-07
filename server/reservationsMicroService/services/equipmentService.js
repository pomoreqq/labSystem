const equipmentModel = require('../models/equipmentModel');

const getAllEquipment = async () => {
  return await equipmentModel.getAllEquipment();
};

const getEquipmentById = async (id) => {
  return await equipmentModel.getEquipmentById(id);
};

const createEquipment = async (data) => {
  const { name, category, status, location } = data;
  return await equipmentModel.createEquipment(name, category, status, location);
};

const updateEquipment = async (data, id) => {
  const { name, category, status, location } = data;
  return await equipmentModel.updateEquipment(id, name, category, status, location);
};

const deleteEquipment = async (id) => {
  return await equipmentModel.deleteEquipment(id);
};

module.exports = {
  getAllEquipment,
  getEquipmentById,
  createEquipment,
  updateEquipment,
  deleteEquipment,
};