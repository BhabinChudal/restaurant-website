const mongoose=require('mongoose');
const express=require('express');
const app=express();

const reviewSchema=new mongoose.Schema({
    customer:{
        type:String,
        min:2
    },
    review:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }, 
    image:{
        url:{
            type:String,
            default:'.././public/img/default.jpg',
        },
        filename:String
    }
})

const Review=mongoose.model('Review',reviewSchema);




module.exports= Review;


