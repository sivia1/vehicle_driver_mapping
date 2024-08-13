const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    driver: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver', required: true},
    vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true},
    startTime: { type: Date, required: true },
    endTime: { tpe: Date, required: true }
});

const schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = schedule;
