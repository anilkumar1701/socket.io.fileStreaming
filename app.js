const express = require('express'),
    socket = require('socket.io'),
    fs = require('fs'),
    path = require('path'),
    app = express(),
    PORT = process.env.PORT || 3001,
    server = app.listen(PORT, ()=>{
        console.log(`server is running on port ${PORT}`);
    });
app.use(express.static(__dirname));
const io = socket(server);
io.on('connection', (socket)=> {
    let readstream=fs.readFileSync(path.resolve(__dirname, './image.jpg'));
    let image64= new Buffer(readstream).toString("base64");
    socket.emit('img-chunk', image64);
})