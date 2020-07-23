const School = require("../model/School")

module.exports ={
    getSchool:async(req,res)=>{
        try {
            let school = await School.find({})
            res.send(school)

        } catch (error) {
            console.log(error);
            
        }
    },

    addSchool:async(req,res)=>{
        try {
            let {name,website,thumb,address,missionStatement,contact}= req.body
            let newSchool = new School({
                name:name,
                address:address,
                contact:contact,
                missionStatement:missionStatement,
                website:website,
                thumb:thumb
            })
            await newSchool.save()

            res.send(newSchool)
        } catch (error) {
            console.log(error);
            
        }
    }
}