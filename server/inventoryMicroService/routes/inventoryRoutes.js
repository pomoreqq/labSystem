const express = require('express');
const router = express.Router();
const inventoryItemController = require('../controllers/inventoryItemController');

router.get('/inventory/items', inventoryItemController.getAllInventoryItems);
router.get('/inventory/items/:id', inventoryItemController.getInventoryItemById);
router.post('/inventory/items', inventoryItemController.createInventoryItem);
router.put('/inventory/items/:id', inventoryItemController.updateInventoryItem);
router.delete('/inventory/items/:id', inventoryItemController.deleteInventoryItem);

module.exports = router;
