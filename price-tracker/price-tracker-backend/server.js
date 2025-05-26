require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const priceRoutes = require('./routes/priceRoutes');
const supplierRoutes = require('./routes/supplierRoutes');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Mount routers
app.use('/api/products', productRoutes);
app.use('/api/prices', priceRoutes);
app.use('/api/suppliers', supplierRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => 
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);