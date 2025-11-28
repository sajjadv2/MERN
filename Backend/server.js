const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./errorMiddleware/errorHandler')
const goalRoutes = require('./routes/goalRoutes');

// Initialize express app
const app = express();

const port =process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use goal routes
app.use('/api/goals', goalRoutes);

app.use(errorHandler)

// Start the server
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});