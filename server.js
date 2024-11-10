const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Import the controller file
const trackRouter = require('./controllers/track.js');

// Mongoose Connection
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());

// ROUTERS
app.use('/tracks', trackRouter)

app.listen(3000, () => {
  console.log('The express app is ready!');
});