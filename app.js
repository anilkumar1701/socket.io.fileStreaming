const express = require('express'),
socket = require('socket.io'),
fs = require('fs'),
path = require('path'),
app = express(),
PORT = 3001,
server = app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
    });
    app.use(express.static(__dirname));
    const io = socket(server);

io.on('connection', (socket)=> {
    socket.on('img-chunk', function(data){
        var writeFile = fs.writeFile("./"+data.name, data.arrayBuffer, function(err) {
            if(err) {
                return console.log(err);
            }
        }); 
    });
});