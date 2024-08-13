// routes/drivers.js
const express = require("express");
const router = express.Router();
const Driver = require("../models/driver");

//Create a new driver
router.post("/", async (req, res) => {
    try{
        const Driver = new Driver(req.body);
        await Driver.save();
        res.status(201).send(Driver);
    } catch(error) {
        res.status(400).send(error);
    }
});

//Get Drivers
router.get("/", async(req, res) => {
    try{
        const { name, phone } = req.query;
        const query = {};
        if (name) query.name = new RegExp(name, 'i');
        if (phone) query.phone = phone;
        const Drivers = await Driver.find(query);
        res.send(Drivers);
    } catch(error) {
        res.status(500).send(error);
    }
});

//Assign Vehicle
router.post('/assign', async (req, res) => {
    try {
        const { driverId, vehicleId } = req.body;
        const Driver = await Driver.findById(driverId);
        if (!Driver) return res.status(404).send({ message: 'Driver not found' });

        Driver.assignedVehicle = vehicleId;
        await Driver.save();
        res.send(Driver);
    } catch (error) {
        res.status(400).send(error);
    }
});

//Unassign Vehicle
router.post('/unassign', async (req, res) => {
    try {
        const { driverId } = req.body;
        const Driver = await Driver.findById(driverId);
        if (!Driver) return res.status(404).send({ message: 'Driver not found' });

        Driver.assignedVehicle = null;
        await Driver.save();
        res.send(Driver);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;