const express = require('express');
const router = express.Router();
const School = require("./model/School")
const schools = require("./schoolLoader/schoolsLoader")

router.post('/test',()=>{
    console.log(schools);
    schools.map((item)=>{
        let newSchool = new School({
            schoolName:item.schoolName,
            address:item.address,
            missionStatement:item.missionStatement,
            contact:item.contact
        })
        console.log(newSchool);
        newSchool.save();
        
    })

    
})
module.exports = router;