const express=require('express');
const app=express();
const mongoose = require('mongoose');
let {Schema}=mongoose;
const menuSchema= new mongoose.Schema({
    name:{
      type:String,
      required:true
    },
    category:{
      type:String,
      enum:['Vegetarian','Non-Vegetarian','Other'],
      required:true
    },
    subcategory:{
      type:String,
      enum:['Curry','Rice','Tandoor','Appetizer','Other'],
      default:'Other'
    },
    price:{
      type:Number,
      required:true
    },
    description:{
      type:String,
      required:true
    },
    reviews:[{
      type:Schema.Types.ObjectId,
      ref:"review"
    }],
    spice_level:String,
    image:{
      url:String,
      filename:String
    }

})

const Menu=mongoose.model('Menu',menuSchema);

module.exports=Menu;
