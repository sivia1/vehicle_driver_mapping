const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    licensePlate: { type: String, required: true, unique: true }
});


module.exports = mongoose.model('Vehicle', vehicleSchema);