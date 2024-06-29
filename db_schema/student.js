//import mongoose from 'mongoose'
const mongoose=require("mongoose")

const studentSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    rollNo:{
        type:String,
        required:true
    },
    phoneNo:{
        type:String,
        required:true
    }




})

const Students=mongoose.model("students",studentSchema)
module.exports=Students
