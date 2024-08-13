const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    phone: { type: String, required: true, unique: true},
    assignedVehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', default: null}

});

module.exports = mongoose.model("Driver", driverSchema);