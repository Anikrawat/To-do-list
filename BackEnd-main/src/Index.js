require('dotenv').config();
const cors = require("cors");
const path = require('path');
const express = require('express');
require('../Models/dataBase');

const app = express();
const port = process.env.PORT || 5000;

// CORS configuration
const corsOptions = {
    origin: 'https://to-do-list-frontend-green.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};
app.use(cors(corsOptions)); // Apply CORS middleware

// Middleware
app.use(express.json());

// API Routes
app.use('/api/auth', require('../Routes/Auth'));
app.use('/api/task', require('../Routes/Tasks'));

// Default route
app.use('/', (req, res) => {
    res.send("Server is running");
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'FrontEnd', 'build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'FrontEnd', 'build', 'index.html'));
    });
}

// Start the server
app.listen(port, () => {
    console.log("Connected to the port " + port);
});
