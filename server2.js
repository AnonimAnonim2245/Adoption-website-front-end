var express = require('express');
const http = require('http')
const fs = require('fs')
const port = 3000
const app = express();

app.use('/static', express.static('public'))

const server = http.createServer(funtion(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('adoptie.html', function(error,data){
        if (error){
            res.writeHead(404)
            res.write('Error: File Not Found')
        }else{
            res.write(data)
        }
        res.end()
        })
       
})
server.listen(port,function(error){
    if(error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port' + port)
    }
})