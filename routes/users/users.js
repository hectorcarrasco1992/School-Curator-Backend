const express = require('express');
const router = express.Router();
const {signUp,login} = require("./controllers/userController")

/* GET users listing. */
router.post('/signup', signUp);
router.post('/login', login);

module.exports = router;
