const express = require('express');
const dotenv = require('dotenv').config();
const { connectDB } = require('./config/db');
const { errorHandler } = require('./Middleware/errorHandler')

//connect DB
connectDB();


// Initialize express app
const app = express();

const port =process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use goal routes
app.use('/api/goals', require('./routes/goalRoutes'));

// Use user routes
app.use('/api/users', require('./routes/userRouters'));

// Use error handler middleware
app.use(errorHandler)

// Start the server
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});