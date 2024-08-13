//server.js
const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const driverRoutes = require("./routes/driverRoutes");
const vehicleRoutes = require("./routes/vehicleRoutes");
const scheduleRoutes = require('../routes/schedule');

const app = express();
app.use(cors());
app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/transport", {

        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

//connecting to database
connectDB();

app.use('/api/drivers', driverRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/schedule', scheduleRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});