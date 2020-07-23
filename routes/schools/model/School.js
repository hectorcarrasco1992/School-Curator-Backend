const mongoose = require("mongoose")

const SchoolSchema = new mongoose.Schema({
    name:{type:String,trim:true},
    address:{type:String,trim:true,unique:"Addresses must be unique"},
    contact:{type:String,trim:true},
    missionStatement:{type:String,trim:true},
    website:{type:String,trim:true},
    thumb:{type:String,trim:true},
    image:{type:String,trim:true},
})

module.exports = mongoose.model("School",SchoolSchema)