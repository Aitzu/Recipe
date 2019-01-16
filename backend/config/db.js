require('dotenv').config();
const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/mini-mern-project');
mongoose.connect(process.env.DB_URL);

mongoose.connection.on('connected', () => {
  console.log('Connected to mongod');
});

mongoose.connection.on('error', () => {
  console.log('Failed to connect to mongod');
});