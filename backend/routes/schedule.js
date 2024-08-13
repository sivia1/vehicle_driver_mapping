const express = require('express');
const router = express.Router();
const schedule = require('../models/schedule');

//Route to assign a driver to a vehicle
router.post('/assign', async (req, res) => {
    const { driverId, vehicleId, startTime, endTime } = req.body;

    //validate the input
    if(!Date.parse(startTime) || !Date.parse(endTime)) {
        return res.status(400).json({error: 'Invalid start or end time '});
    }

    const start = new Date(startTime);
    const end = new Date(endTime);

    //check if end time is after start time
    if(end <= start) {
        return res.status(400).json({ error: 'End time must be after start time' });
    }

    //check for overlapping assignments
    const overlappingAssignments = await schedule.find({
        driver: driverId,
        $or: [
            {
                $and: [
                    {starttime: { $lte: end } },
                    { endTime: {$gte: start }}
                ]
            }
        ]
    });

    if (overlappingAssignments.length > 0) {
        return res.status(400).json({ error: 'Driver already assigned in this time period' });
    }

    //create new Assignment
    const newAssignment = new schedule({ driver: driverId, vehicle: vehicleId, startTime: start, endTime: end });

    try {
        await newAssignment.save();
        res.status(201).json(newAssignment);
    } catch(error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;