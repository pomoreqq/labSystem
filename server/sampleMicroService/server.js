const dotenv = require('dotenv')
dotenv.config({path: '../.env'})
const express =require('express')

const sampleRoutes = require('./routes/sampleRoutes')



const serverPORT = process.env.USERSERVICEPORT || 3002


const app = express()

app.use('/api', sampleRoutes)

app.listen(serverPORT, (e) => {
    if (e) console.log('server has error')


    console.log('server is up on PORT: ' + serverPORT)
})