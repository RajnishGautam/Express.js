//ExpressJS>insertexpress1.js
const connectdb1=require('./connection');
const insert=async()=>{
    const db=await connectdb1();
    // const result=await db.insertOne({Name:'Nitish',Age:21,Hobbies:'Boxing'});
    const result=await db.insertOne({Name:'Akhila',Age:18,Hobbies:'Dancing'});
    if(result.acknowledged)
        console.log('Data inserted successfully');
}

insert();
