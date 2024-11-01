const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const sampleRoutes = require('./routes/sampleRoutes');




const app = express();
app.use(express.json());
app.use('/api', sampleRoutes);

const PORT = process.env.SAMPLESERVICEPORT || 3002;

app.listen(PORT, () => {
    console.log(`Samples service running on port: ${PORT}`);
});