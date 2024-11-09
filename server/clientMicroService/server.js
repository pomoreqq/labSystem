const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const express = require('express');
const clientRoutes = require('./routes/clientRoutes');

const serverPORT = process.env.CLIENTSERVICEPORT || 3005;

const app = express();
app.use(express.json());
app.use('/api', clientRoutes);

app.listen(serverPORT, (e) => {
  if (e) console.log('Server has an error');
  console.log('Server is up on port:', serverPORT);
});
