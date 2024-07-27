const express = require('express')
const router = express.Router()
const Controller = require('../Controllers/Auth-Controller')
const registerSchema = require('../Validators/authValidators')
const validate = require('../MiddleWare/validateMiddleware')
const fetchUser = require('../MiddleWare/fetchUser')

router.route("/register").post(validate(registerSchema),Controller.register)
router.route("/login").post(Controller.login)
router.route("/getuser").get(fetchUser,Controller.getUser)

module.exports = router