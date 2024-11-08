const inventoryItemModel = require('../models/inventoryItemModel');

const getAllInventoryItems = async () => {
  return await inventoryItemModel.getAllInventoryItems();
};

const getInventoryItemById = async (id) => {
  return await inventoryItemModel.getInventoryItemById(id);
};

const createInventoryItem = async (data) => {
  const { name, quantity, supplierId } = data;
  return await inventoryItemModel.createInventoryItem(name, quantity, supplierId);
};

const updateInventoryItem = async (data, id) => {
  const { name, quantity, supplierId } = data;
  return await inventoryItemModel.updateInventoryItem(id, name, quantity, supplierId);
};

const deleteInventoryItem = async (id) => {
  return await inventoryItemModel.deleteInventoryItem(id);
};

module.exports = {
  getAllInventoryItems,
  getInventoryItemById,
  createInventoryItem,
  updateInventoryItem,
  deleteInventoryItem,
};
