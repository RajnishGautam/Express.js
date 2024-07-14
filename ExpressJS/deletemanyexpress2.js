//ExpressJS>deletemanyexpress.js
const connectdb = require('./connection');

const deleteManyData = async () => {
  let data = await connectdb();
  let result = await data.deleteMany({ $or: [{ Name: 'XYZ' }, { Name: 'ABC' }] });
  console.warn("Data deleted successfully", result);
}

deleteManyData();