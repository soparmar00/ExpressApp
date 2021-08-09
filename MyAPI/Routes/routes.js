const express = require('express');
const getLoginUser = require('../Controller/login');
const createUser = require('../Controller/login');
const getUser = require('../Controller/user')
const loginUser = require('../Controller/login')
const checkAuth = require("../middleware/auth");

const router = express.Router();


router.get('/users',checkAuth, getUser)
router.get('/user', getLoginUser);
router.post('/signup', createUser);
router.post('/login', loginUser)



module.exports = router;