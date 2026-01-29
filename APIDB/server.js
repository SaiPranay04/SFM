require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const cors= require('cors');
const routes = require('./routes');
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

// Connect to MongoDB using environment variable
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/yourDatabaseName', { 
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
 });

// Middleware to parse JSON (using Express built-in)
app.use(express.json());

// Use routes
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  
});

