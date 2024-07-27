const { z } = require('zod')

const taskSchema = z.object({
    Title: z
    .string({required_error:'Title is required.'})
    .trim()
    .min(3,{message:"Title must be atleast 3 characters long."})
    .max(255,{message:"Title can not be more than 255 characters long."}),

    Description: z
    .string({required_error:"Description is required"})
    .trim()
    .min(3,{message:"Description must be atleast 3 characters long."})
    .max(255,{message:"Description can not be more than 255 characters long."}),
})

module.exports = taskSchema;