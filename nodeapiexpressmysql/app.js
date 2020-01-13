//load our app server using express somehow..
const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static('./public'))

app.use(morgan('short'))

const router = require('./routes/user')
app.use(router)


app.get('/', (req, res) =>{
    console.log('Responding to root router')
    res.send('hello tharindu')
})

//localhost 3002
app.listen(3002, () =>{
    console.log('server start 3002....')
})



