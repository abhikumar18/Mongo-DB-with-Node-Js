const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

mongoose.connect("mongodb://localhost:27017",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("Mongo DB Connected");
}).catch((err)=>{
    console.log(err);
})

const student = new mongoose.Schema({
    name:String,
    workout:Boolean,
    height:Number
})

const Student = new mongoose.model("Student",student);


// Insert Data Into the Mongo DB
const adder = async ()=>{
    const ss = await Student.create({
        name:"Abhishek kumar",
        workout:false,
        height:182
    })
}   
adder();