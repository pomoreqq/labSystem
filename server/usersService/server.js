
require('dotenv').config({ path: '../.env' });
const express = require('express')
const pool = require('../db.js')

const serverPORT = process.env.USERSERVICEPORT || 3001;


const app = express()
app.use(express.json())

app.get('/users', async (req,res) => {
    try {
        const getUsers = await pool.query(`SELECT * FROM users`)
        res.status(200).json({users: getUsers.rows})
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
})

app.post('/users' , async (req,res) => {
    const {firstName,lastName,email,password,roleId} = req.body;

    try {
        const createUser = await pool.query(
            `INSERT INTO users (firstName,lastName,email,password,roleId)
            VALUES ($1,$2,$3,$4,$5) RETURNING *`, [firstName,lastName,email,password,roleId]
        )
        
        res.status(201).json({message: 'User created sucessfully',
            user: createUser.rows[0]
        })
    } catch (e)  {
        res.status(500).json({
            Error: 'Something went wrong',
            e:e
        })
    }
})

app.patch('/users/:id', async(req,res) => {
    const {id} = req.params;
    const {firstName,lastName,email,password,roleId} = req.body;

    if (!firstName && !lastName && !email && !password && roleId) {
        return res.status(400).json({error: 'no fields provided'})
    }

    try {
       const updateResult =  await pool.query(
        `UPDATE users SET 
        firstName = COALESCE($1,firstName),
        lastName = COALESCE($2,lastName),
        email = COALESCE($3,email),
        password = COALESCE($4,password),
        roleId = COALESCE($5,roleId)
        WHERE id = $6 RETURNING *`,[firstName,lastName,email,password,roleId,id]
       )

       if(updateResult.rowCount === 0) {
        res.status(404).json({error: 'User not found'})
       }
       res.status(200).json({
        message: 'user updated sucessfully',
        user: updateResult.rows[0]
       })
    } catch (e) {
        res.status(500).json({message: 'Something wen wrong with updating user',
            error:e
        })
    }
})


app.delete('/users/:id' ,async (req,res) => {
    const {id} = req.params;

    try {
        const deletedUser = await pool.query(
            `DELETE FROM users WHERE id = $1 RETURNING *`, [id]
        )

        if (deletedUser.rowCount === 0) {
            return res.status(404).json({message: 'user not found'})
        }

        res.status(200).json({
            message: 'user deleted sucessfuly',
            user: deletedUser.rows[0]
        })
    } catch (e) {
        res.status(500).json({
            message: 'something went wrong',
            error: e
        })
    }
})
app.listen(serverPORT, (e) => {
    if (e) console.log('Server has error');

    console.log('Server is up on port: ', serverPORT)
})