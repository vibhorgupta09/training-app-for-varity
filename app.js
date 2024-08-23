const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/trainingDatabase', {
});

// Middleware
app.use(express.json());

// Import routes
const clientRoutes = require('./routes/clientRoutes');
const traineeRoutes = require('./routes/traineeRoutes');
const trainerRoutes = require('./routes/trainerRoutes');
const batchRoutes = require('./routes/batchRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');
const accountRoutes = require('./routes/accountRoutes');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Use routes
app.use('/api/clients', clientRoutes);
app.use('/api/trainees', traineeRoutes);
app.use('/api/trainers', trainerRoutes);
app.use('/api/batches', batchRoutes);
app.use('/api/attendances', attendanceRoutes);
app.use('/api/accounts', accountRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
