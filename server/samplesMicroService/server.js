const dotenv = require('dotenv')
dotenv.config({path: '../.env'})
const express =require('express')

const sampleRoutes = require('./routes/sampleRoutes')
const sampleTestRoutes = require('./routes/sampleTestsRoutes')
const sampleHistoryRoutes = require('./routes/sampleHistoryRoutes')
const sampleTestsHistoryRoutes = require('./routes/sampleTestsHistoryRoutes')
const serverPORT = process.env.SAMPLESMICROSERVICE || 3002


const app = express()

app.use(express.json())

app.use('/api', sampleRoutes)
app.use('/api', sampleTestRoutes)
app.use('/api',sampleHistoryRoutes)
app.use('/api',sampleTestsHistoryRoutes )

app.listen(serverPORT, (e) => {
    if (e) console.log('server has error')


    console.log('server is up on PORT: ' + serverPORT)
})