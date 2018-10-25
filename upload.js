const socket = io.connect();

socket.on('img-chunk', (chunk)=>{
    var img = document.getElementById('output');
    img.setAttribute('src', 'data:image/jpeg;base64,'+chunk);
})