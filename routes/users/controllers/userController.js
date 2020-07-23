const User = require('../model/User');
const bcrypt = require('bcrypt');
const dbErrorHelper = require('../../lib/dbErrorHelper/dbErrorHelper');
const jwtHelper = require('../../users/authHelpers/jwtHelp');

module.exports = {
    signUp: async (req, res) => {
        try {
            console.log(req.body);
            
            let createdUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                school:{
                    name:req.body.schoolName
                }
                
            });
            console.log("created user".createdUser);
            
            let genSalt = await bcrypt.genSalt(12);
            let hashedPassword = await bcrypt.hash(
                createdUser.password,
                genSalt
            );
            createdUser.password = hashedPassword;
            await createdUser.save();
            res.json({
                message: 'User created',
            });
        } catch (e) {
            res.status(500).json({
                message: dbErrorHelper(e),
            });
        }
    },

    login: async (req, res) => {
        console.log(req.body);

        try {
            let foundUser = await User.findOne({
                email: req.body.email,
            }).select('-__v -userCreated');
            if (foundUser === null) {
                throw Error('User not found, please sign up.');
            }
            let comparedPassword = await jwtHelper.comparePassword(
                req.body.password,
                foundUser.password
            );
            if (comparedPassword === 409) {
                throw Error('Check your email and password.');
            }
            let jwtToken = await jwtHelper.createJwtToken(foundUser);
            res.json({
                jwtToken: jwtToken,
            });
            
        } catch (e) {
            console.log(e);

            res.status(500).json({
                message: dbErrorHelper(e),
            });
        }
    },
}