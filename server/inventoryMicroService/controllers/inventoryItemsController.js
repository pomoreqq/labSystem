const inventoryItemService = require('../services/inventoryItemService');

const getAllInventoryItems = async (req, res) => {
  try {
    const items = await inventoryItemService.getAllInventoryItems();
    res.status(200).json({ items });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', errorMessage: e.message });
  }
};

const getInventoryItemById = async (req, res) => {
  try {
    const item = await inventoryItemService.getInventoryItemById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json({ item });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', errorMessage: e.message });
  }
};

const createInventoryItem = async (req, res) => {
  try {
    const item = await inventoryItemService.createInventoryItem(req.body);
    res.status(201).json({ message: 'Item created successfully', item });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', errorMessage: e.message });
  }
};

const updateInventoryItem = async (req, res) => {
  try {
    const item = await inventoryItemService.updateInventoryItem(req.body, req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json({ message: 'Item updated successfully', item });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', errorMessage: e.message });
  }
};

const deleteInventoryItem = async (req, res) => {
  try {
    const item = await inventoryItemService.deleteInventoryItem(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json({ message: 'Item deleted successfully', item });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', errorMessage: e.message });
  }
};

module.exports = {
  getAllInventoryItems,
  getInventoryItemById,
  createInventoryItem,
  updateInventoryItem,
  deleteInventoryItem,
};
