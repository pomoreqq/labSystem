require('dotenv').config()
const { Pool} = require('pg');

const pool = new Pool({
host: process.env.HOST,
database: process.env.DATABASE,
user: process.env.USER,
password: process.env.PASSWORD,
port: process.env.PORT
})


pool.connect().then(() =>  console.log('DB connected')).catch(e => console.log('DB doesnt connected', e));

module.exports = {
    query: (text,params) => pool.query(text,params)
}