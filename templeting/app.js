//templete>app.js
const express=require('express');
const app=express();
const port=3000;

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index',{title:'Rajnish Webpage',message:'I am Rajnish from Bihar'});
});
app.get('/aboutus',(req,res)=>{
    res.render('about');
});
app.listen(port);


