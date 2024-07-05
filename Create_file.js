// var fs=require('fs');
// fs.writeFile('rajnish1.txt','First file to learn express.js',function(e){
//     if(e) throw e;
//     console.warn('file created');

// });

// var fs=require('fs');
// fs.open('rajnish2.txt','w',function(e,f){
//     if(e) throw e;
//     console.warn('file created');
// });

// var fs=require('fs');
// fs.appendFile('rajnish2.txt','I am  studying B.tech',function(e){
//     if(e) throw e;
//     console.warn('the file is appended');
// });

// var fs=require('fs');
// fs.rename('rajnish2.txt','rajnish3.txt',function(e){
//     if(e) throw e;
//     console.warn('file renamed');
// });

// var fs=require('fs');
// fs.unlink('rajnish3.txt',function(e){
//     if(e) throw e;
//     console.warn('file deleted');
// });


var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
    fs.readFile('rajnish1.txt', function(e, data) {
        res.writeHead(200, {'Content-Type': 'text'});
        res.write(data);
        return res.end();
    });
}).listen(3000);