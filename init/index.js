const express=require('express');
const app=express();
const Menu=require('../models/menu');
const Review=require('../models/review');
const {sampleMenu,sampleReviews}=require('../init/data');

//to connect to the mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/tawagrill')
  .then(() => console.log('Connected!'));

let port=3000;

app.listen(port,()=>{
  console.log("Server is listening in: ",port);
})

app.get('/menu/test',async(req,res)=>{
  const deleteData=await Menu.deleteMany({});
  const deleteReview=await Review.deleteMany({});
  const insertedData=await Menu.insertMany(sampleMenu);

  console.log(insertedData);

  res.send('worked');
})