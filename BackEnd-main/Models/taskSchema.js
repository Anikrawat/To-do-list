const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    Title:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Tag:{
        type:String,
        default:"General"
    },
    Date:{
        type:Date,
        default:Date.now,
        required:true
    },
    isStarred:{
        type:Boolean,
        default:false
    }
})

module.exports = new mongoose.model('Notes',noteSchema)