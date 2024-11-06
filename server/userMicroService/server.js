
const dotenv = require('dotenv')
dotenv.config({path: '../.env'})
const express = require('express')
const userRoutes = require('./routes/userRoutes')
const roleRoutes = require('./routes/roleRoutes')
const serverPORT = process.env.USERSERVICEPORT || 3001;


const app = express()
app.use(express.json())
app.use('/api',userRoutes)
app.use('/api', roleRoutes)


app.listen(serverPORT, (e) => {
    if (e) console.log('Server has error');

    console.log('Server is up on port: ', serverPORT)
})


