const equipmentService = require('../services/equipmentService');

const getAllEquipment = async (req, res) => {
  try {
    const equipment = await equipmentService.getAllEquipment();
    res.status(200).json({ equipment });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', errorMessage: e.message });
  }
};

const getEquipmentById = async (req, res) => {
  try {
    const equipment = await equipmentService.getEquipmentById(req.params.id);
    if (!equipment) {
      return res.status(404).json({ message: 'Equipment not found' });
    }
    res.status(200).json({ equipment });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', errorMessage: e.message });
  }
};

const createEquipment = async (req, res) => {
  try {
    const equipment = await equipmentService.createEquipment(req.body);
    res.status(201).json({ message: 'Equipment created successfully', equipment });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', errorMessage: e.message });
  }
};

const updateEquipment = async (req, res) => {
  try {
    const equipment = await equipmentService.updateEquipment(req.body, req.params.id);
    if (!equipment) {
      return res.status(404).json({ message: 'Equipment not found' });
    }
    res.status(200).json({ message: 'Equipment updated successfully', equipment });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', errorMessage: e.message });
  }
};

const deleteEquipment = async (req, res) => {
  try {
    const equipment = await equipmentService.deleteEquipment(req.params.id);
    if (!equipment) {
      return res.status(404).json({ message: 'Equipment not found' });
    }
    res.status(200).json({ message: 'Equipment deleted successfully', equipment });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', errorMessage: e.message });
  }
};

module.exports = {
  getAllEquipment,
  getEquipmentById,
  createEquipment,
  updateEquipment,
  deleteEquipment,
};