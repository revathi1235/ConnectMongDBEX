const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/newOnedb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Successfully connected to the database');
    
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });
  
  app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
  });
