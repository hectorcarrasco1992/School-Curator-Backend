const express = require('express');
const router = express.Router();
const School = require("./model/School")
const schools = require("./schoolLoader/schoolsLoader")
const{getSchool}= require('./controller/schoolController')

router.post('/test',()=>{
    console.log(schools);
    schools.map((item)=>{
        let newSchool = new School({
            name:item.name,
            address:item.address,
            missionStatement:item.missionStatement,
            contact:item.contact,
            website:item.website
        })
        console.log(newSchool);
        newSchool.save();
        
    })
});

router.get('/get-schools',getSchool)
module.exports = router;