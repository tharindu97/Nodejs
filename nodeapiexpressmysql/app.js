//load our app server using express somehow..
const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static('./public'))

app.use(morgan('short'))

app.post('/user_create', (req, res) =>{
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

function getConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'apinode'
    })
}

app.get('/user/:id', (req, res)=>{
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

app.get('/user', (req, res)=>{
    console.log('panama ' + req.params.id)

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'apinode'
    })
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


app.get('/', (req, res) =>{
    console.log('Responding to root router')
    res.send('hello tharindu')
})

app.get('/users', (req, res) =>{
    var user1 = {firstName: 'tarindu', lastname:'kavishna'}
    const user2 = {firstName: 'tarindu', lastname:'kavishna'}
    res.json([user1, user2])
})

//localhost 3002
app.listen(3002, () =>{
    console.log('server start 3002....')
})



