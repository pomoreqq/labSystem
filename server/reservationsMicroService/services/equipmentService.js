const equipmentModel = require('../models/equipmentModel');

const getAllEquipment = async () => {
  return await equipmentModel.getAllEquipment();
};

const getEquipmentById = async (id) => {
  return await equipmentModel.getEquipmentById(id);
};

const createEquipment = async (data) => {
  const { name, category, status, location } = data;

  const allowedCategories = ['measurmentDevices', 'analyticalEquipment', 'reserachEquipment','laboratoryEquipment', 'itEquipment'
    ,'chemicalContainers', 'heatingAndCoolingDevices', 'safetyEquipment', 'maintenanceTools', 'otherTools'];

    const allowedStatues = ['inUse', 'offUse'];

  if (!allowedCategories.includes(category)) {
    throw new Error('Invalid category Type')
  }

  if (!allowedStatues.includes(status)) {
    throw new Error('invalid status')
  }

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