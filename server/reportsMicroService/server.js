const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const express = require('express');
const reportRoutes = require('./routes/reportRoutes');
const serverPORT = process.env.REPORTSERVICEPORT || 3004;

const app = express();
app.use(express.json());

app.use('/api', reportRoutes);

app.listen(serverPORT, (e) => {
  if (e) console.log('Server has error');
  console.log('Server is up on port:', serverPORT);
});