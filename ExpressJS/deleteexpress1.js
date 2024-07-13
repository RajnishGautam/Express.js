//ExpressJS>deleteexpress1.js
const connectdb=require('./connection');
//es is known as ECMAScript 
const deletedata=async ()=>{
    let data=await connectdb();
    let result=await data.deleteOne({Name :'XYZ'});
    console.warn("Data deleted successfully",result);
}
deletedata();