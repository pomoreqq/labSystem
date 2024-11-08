const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const express = require('express');
const inventoryRoutes = require('./routes/inventoryRoutes');
const supplierRoutes = require('./routes/supplierRoutes');
const serverPORT = process.env.INVENTORYSERVICEPORT || 3002;

const app = express();
app.use(express.json());

app.use('/api', inventoryRoutes);
app.use('/api', supplierRoutes);

app.listen(serverPORT, (e) => {
  if (e) console.log('Server has error');
  console.log('Server is up on port: ', serverPORT);
});
