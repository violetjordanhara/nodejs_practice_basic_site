const fs = require('fs');
const path = require('path');
const http = require('node:http');

// //create project directory 
// fs.mkdir(path.join(__dirname, '/project'), {}, err=>{
//     if (err) throw err;
//     console.log("directory created")
// })

// //create index.html file in project directory
// fs.writeFile(path.join(__dirname, '/project', 'index.html'), 'test', err=>{
//     if (err) throw err;
//     console.log("index.html file created")
// })

// //create about.html file in project directory
// fs.writeFile(path.join(__dirname, '/project', 'about.html'), 'about', err=>{
//     if (err) throw err;
//     console.log("about.html file created")
// })

// //create contact-me.html
// fs.writeFile(path.join(__dirname, '/project', 'contact-me.html'), 'contact', err=>{
//     if (err) throw err;
//     console.log("created about-me.html file")
// })

// //create 404.html file
// fs.writeFile(path.join(__dirname, '/project', '404.html'), '404', err=>{
//     if (err) throw err;
//     console.log("created 404.html file")
// })

//create server object

// http.createServer((req, res)  =>{
//     //write response
//     res.write("hello world");
//     res.end()
// }).listen(8081, () => console.log('server running'));

//define a port we want to listen to
const PORT=8080; 

//create a function which handles requests and send response. send the pages according to request url
//run npm run dev, look and change the script to run nodemon
function handleRequest(request, response){
    //response.end('It Works!! Path Hit: ' + request.url);
    if (request.url === '/'){
        fs.readFile(path.join(__dirname,'project', 'index.html'), (err, content) =>{
            if (err) throw err;
            response.end(content)
        })
    }
    if (request.url === '/about'){
        fs.readFile(path.join(__dirname,'project', 'about.html'), (err, content) =>{
            if (err) throw err;
            response.end(content)
        })
    }
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});