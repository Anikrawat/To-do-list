const { z } = require('zod')

const registerSchema = z.object({
    name: z
    .string({required_error:'Name is required.'})
    .trim()
    .min(3,{message:"Name must be atleast 3 characters long."})
    .max(255,{message:"Name can not be more than 255 characters long."}),

    email: z
    .string({required_error:'Email is required.'})
    .trim()
    .email({message:"Invalid Email Address"})
    .min(3,{message:"Email must be atleast 3 characters long."})
    .max(255,{message:"Email can not be more than 255 characters long."}),

    password: z
    .string({required_error:'password is required.'})   
    .trim()
    .min(6,{message:"password must be atleast 6 characters long."})
    .max(255,{message:"password can not be more than 255 characters long."}),
})

module.exports = registerSchema;