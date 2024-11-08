const dotenv = require('dotenv')
dotenv.config({path: '../.env'})
const express = require('express')
const equipmentRoutes = require('./routes/equipmentRoutes')
const reservationRoutes = require('./routes/reservationRoutes')
const serverPORT = process.env.RESERVATIONSERVICEPORT || 3003;


const app = express()
app.use(express.json())
app.use('/api',reservationRoutes)
app.use('/api', equipmentRoutes)


app.listen(serverPORT, (e) => {
    if (e) console.log('Server has error');

    console.log('Server is up on port: ', serverPORT)
})


