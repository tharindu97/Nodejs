const express = require('express')
const mysql = require('mysql')
const router = express.Router()


router.get('/user', (req, res)=>{
    console.log('panama ' + req.params.id)

    const connection = getConnection()
    const queryString = 'SELECT * FROM user'
    connection.query(queryString,(err, rows, fields) => {
        if(err){
            console.log('Failed to query for users' + err)
            res.sendStatus(500)
            return
        }
        console.log('connect')
        res.json(rows)
    })
})

router.get('/user/:id', (req, res)=>{
    console.log('panama ' + req.params.id)

    const connection = getConnection()

    const userId = req.params.id
    const queryString = 'SELECT * FROM user WHERE id = ?'
    connection.query(queryString,[userId], (err, rows, fields) => {
        if(err){
            console.log('Failed to query for users' + err)
            res.sendStatus(500)
            return
        }
        console.log('connect')

        const users = rows.map((row) =>{
            return {firstName: row.firstname, lastName: row.lastname}
        }) 
        res.json(users)
    })
})


router.post('/user_create', (req, res) =>{
    console.log('Trying to create a new user....')

    const firstName = req.body.create_first_name
    const lastName = req.body.create_last_name

    const queryString = 'INSERT INTO user (firstname, lastname) VALUES (?, ?)'
    getConnection().query(queryString, [firstName, lastName], (err, results, fields)=>{
        if(err){
            console.log('Failed to insert new user: ' + err)
            res.sendStatus(500)
            return
        }
        console.log('Insert a new user with id: ', results.insertedId)
        res.end()
    })
})
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    database: 'apinode'
})
function getConnection() {
    return pool
}

module.exports = router
