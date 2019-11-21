const http = require('http')
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

server.listen(5000)