const http = require('http')
const url = require('url')
const fs = require('fs')


const server = http.createServer(function(req, res){
    if(req.url == '/' || req.url == "index"){
        fs.readFile('./public/index.html', function(err, data){
        if(err){
            res.writeHead(404, {'Content-type':'text/html'})
            res.write('404 File Not found')
            res.end('')
        }else{
            res.writeHead(200, {'Content-type':'text/html'})
            res.write(data)
            res.end('')
        }
        })
    }else if(req.url == '/contact'){
        fs.readFile('./public/contact.html', function(err, data){
            if(err){
                res.writeHead(404, {'Content-type':'text/html'})
                res.write('404 File Not found')
                res.end('')
            }else{
                res.writeHead(200, {'Content-type':'text/html'})
                res.write(data)
                res.end('')
            }
        })
    }else{
        const data = fs.readFileSync('./public/404.html')
        res.writeHead(404, {'Content-type':'text/html'})
        res.write(data)
        res.end()
    }
})
server.listen(3000)
console.log("server success")