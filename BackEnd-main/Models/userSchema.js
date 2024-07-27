const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required: true,
        min:6,
        max:20
    },
    email:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required: true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})



userSchema.pre('save', async function(next){

    const user = this;

    if (!user.isModified("password")) {
        next()
    }

    try {

        const saltRound = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(user.password,saltRound)

        user.password = hashPassword

    } catch (error) {
        next(error)
    }

})

userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId:this._id.toString()
        },
        process.env.JWT_SECRET)
    } catch (error) {
        console.log(error)
    }
}

userSchema.methods.comparePasswords = async function(password){
    return bcrypt.compare(password,this.password)
}

const userModel = new mongoose.model('User',userSchema)
module.exports = userModel