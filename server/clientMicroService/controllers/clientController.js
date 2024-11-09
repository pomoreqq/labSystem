const clientService = require('../services/clientService');

const getAllClients = async (req, res) => {
  try {
    const clients = await clientService.getAllClients();
    res.status(200).json({ clients });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', errorMessage: e.message });
  }
};

const getClientById = async (req, res) => {
  try {
    const client = await clientService.getClientById(req.params.id);
    if (!client) {
      return res.status(404).json({ message: 'Client not found!' });
    }
    res.status(200).json({ client });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', errorMessage: e.message });
  }
};

const createClient = async (req, res) => {
  try {
    const client = await clientService.createClient(req.body);
    res.status(201).json({ message: 'Client created successfully!', client });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', errorMessage: e.message });
  }
};

const updateClient = async (req, res) => {
  try {
    const client = await clientService.updateClient(req.body, req.params.id);
    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }
    res.status(200).json({ message: 'Client updated successfully', client });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', errorMessage: e.message });
  }
};

const deleteClient = async (req, res) => {
  try {
    const client = await clientService.deleteClient(req.params.id);
    if (!client) {
      return res.status(404).json({ message: 'Client not found!' });
    }
    res.status(200).json({ message: 'Client deleted!', client });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', errorMessage: e.message });
  }
};

const getClientSamples = async (req, res) => {
  try {
    const samples = await clientService.getClientSamples(req.params.id);
    res.status(200).json({ samples });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong', errorMessage: e.message });
  }
};

module.exports = {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
  getClientSamples,
};
