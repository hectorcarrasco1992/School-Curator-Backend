const School = require("../model/School")

module.exports ={
    getSchool:async(req,res)=>{
        try {
            let school = await School.find({})
            res.send(school)

        } catch (error) {
            console.log(error);
            
        }
    }
}