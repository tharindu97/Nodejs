//load our app server using express somehow..
const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('short'))


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



