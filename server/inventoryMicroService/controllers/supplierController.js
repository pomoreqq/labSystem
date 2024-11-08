const supplierService = require('../services/supplierService');

const getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await supplierService.getAllSuppliers();
    res.status(200).json({ suppliers });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', errorMessage: e.message });
  }
};

const getSupplierById = async (req, res) => {
  try {
    const supplier = await supplierService.getSupplierById(req.params.id);
    if (!supplier) {
      return res.status(404).json({ message: 'Supplier not found' });
    }
    res.status(200).json({ supplier });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', errorMessage: e.message });
  }
};

const createSupplier = async (req, res) => {
  try {
    const supplier = await supplierService.createSupplier(req.body);
    res.status(201).json({ message: 'Supplier created successfully', supplier });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', errorMessage: e.message });
  }
};

const updateSupplier = async (req, res) => {
  try {
    const supplier = await supplierService.updateSupplier(req.body, req.params.id);
    if (!supplier) {
      return res.status(404).json({ message: 'Supplier not found' });
    }
    res.status(200).json({ message: 'Supplier updated successfully', supplier });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', errorMessage: e.message });
  }
};

const deleteSupplier = async (req, res) => {
  try {
    const supplier = await supplierService.deleteSupplier(req.params.id);
    if (!supplier) {
      return res.status(404).json({ message: 'Supplier not found' });
    }
    res.status(200).json({ message: 'Supplier deleted successfully', supplier });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', errorMessage: e.message });
  }
};

module.exports = {
  getAllSuppliers,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
};
