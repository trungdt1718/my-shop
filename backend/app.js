const express = require('express');
const cors = require('cors');
const sequelize = require('./src/config/database');
const productRoutes = require('./src/routes/productRoutes');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', productRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Database connection and server start
sequelize.sync().then(() => {
  console.log('Database connected successfully.');
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});