const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB Successfully!');
  })
  .catch((err) => {
    console.error('❌ MongoDB Connection Error: ', err);
  });

app.get('/', (req, res) => {
  res.json({ 
    message: "Welcome to Skill Wallet API 🚀",
    status: "Database and Server are running perfectly!"
  });
});


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});