const mongoose = require("mongoose")

const SchoolSchema = new mongoose.Schema({
    name:{type:String,trim:true},
    address:{type:String,trim:true},
    contact:{type:String,trim:true},
    missionStatement:{type:String,trim:true},
})

module.exports = mongoose.model("School",SchoolSchema)