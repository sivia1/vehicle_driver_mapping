// routes/vehicles.js
const express = require("express");
const router = express.Router();
const Vehicle = require("../models/vehicle");

//Get Vehicles
router.get("/", async (_req, res) => {
    try{
        const vehicles = await Vehicle.find();
        res.send(vehicles);
    } catch(error) {
        res.status(500).send(error);
    }
});

// Create a vehicle (for pre-populated data)
router.post("/", async (req, res) => {
    try {
        const vehicle = new Vehicle(req.body);
        const savedVehicle = await vehicle.save();
        res.status(201).send(savedVehicle);
    } catch(error) {
        res.status(400).send(error);
    }
});

module.exports = router;