require('dotenv').config();
const cors = require("cors");
const path = require('path')
const express = require('express')
require('../Models/dataBase')

const app = express()
const port = process.env.PORT || 5000
app.use(cors());
app.use(express.json())

app.use('/api/auth',require('../Routes/Auth'))
app.use('/api/task',require('../Routes/Tasks'))

if(process.env.NODE_ENV == 'production'){
    app.use(express.static('FrontEnd/build'))

    app.get('/',(req,res) => {
        app.use(express.static(path.resolve(__dirname,'FrontEnd','build')))
        res.sendFile(path.resolve(__dirname,'FrontEnd','build','index.html'))
    })
}

app.listen(port,()=>{
    console.log("Connected to the port "+port)
})