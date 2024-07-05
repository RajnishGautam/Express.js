// var fs=require('fs');
// var ch=fs.createReadStream('rajnish2.txt');
// ch.on('open',function(){
//     console.log('file opened');
// });

// var fs=require('fs');
// var events=require('events');
// var emitter=new events.EventEmitter();
// var myEvent=function(){
//     console.log('my event is called');
// }
// emitter.on('Event_variable',myEvent);
// emitter.emit('Event_variable');
// emitter.emit('Event_variable');
var url=require('url');
var ad='http://localhost:2024/index.html?year=2017&month=february';
var q=url.parse(ad,true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
var qc=q.query;
console.log(qc.year);