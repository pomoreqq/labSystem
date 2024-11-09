const clientModel = require('../models/clientModel');

const getAllClients = async () => {
  return await clientModel.getAllClients();
};

const getClientById = async (id) => {
  return await clientModel.getClientById(id);
};

const createClient = async (data) => {
  const { name, email, phoneNumber } = data;
  return await clientModel.createClient(name, email, phoneNumber);
};

const updateClient = async (data, id) => {
  const { name, email, phoneNumber } = data;
  return await clientModel.updateClient(id, name, email, phoneNumber);
};

const deleteClient = async (id) => {
  return await clientModel.deleteClient(id);
};

const getClientSamples = async (clientId) => {
  return await clientModel.getClientSamples(clientId);
};

module.exports = {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
  getClientSamples,
};
