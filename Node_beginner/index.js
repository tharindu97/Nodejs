const path = require('path')
const express = require('express')

const app = new express()
app.use(express.static('public'))

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('/about', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'about.html'))
})

app.get('/contact', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'contact.html'))
})

app.listen(5000, () => {
    console.log('App Lisitening on port 5000')
})

/*const http = require('http')
const fs = require('fs')

const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')
const homePage = fs.readFileSync('index.html')

const server = http.createServer((request, response) => {
    

    if(request.url === '/about'){
        return response.end(aboutPage)
    }else if(request.url === '/contact'){
        return response.end(contactPage)
    }else if(request.url === '/'){
        return response.end(homePage)
    }else{
        response.writeHead(404)
        return response.end('This page is not Found')
    }
})

server.listen(5000)*/