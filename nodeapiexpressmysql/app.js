//load our app server using express somehow..
const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')

app.use(morgan('combined'))

app.get('/user/:id', (req, res)=>{
    console.log('panama ' + req.params.id)

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'apinode'
    })

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



