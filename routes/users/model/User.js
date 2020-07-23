const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, trim: true },
    username:{type:String,trim:true,unique:"Must me unique"},
    email: { type: String, unique: 'email must be unique', trim: true },
    password: { type: String, trim: true },
    school:{
        schoolName:{type:String,trim:true,}
    }
});

module.exports = mongoose.model('User', UserSchema);