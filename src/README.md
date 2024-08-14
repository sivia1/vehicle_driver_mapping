# Driver-Vehicle-Mapping System

## Overview
The Driver-Vehicle-Mapping System is developed to manage and map drivers to their respective vehicles. This system allows for easy tracking and management of both driver and vehicle details.

## Features
- Add, update, and delete driver details
- Add, update, and delete vehicle details
- Assign vehicles to drivers
- View assigned vehicles for each driver
- User Management: Add, update, and delete user accounts with different roles (e.g., Admin Driver)

## Technologies Used
Frontend- React, vite, Tailwind.css,React-hook-form
Backend- Node.js, Express.js, MongoDB

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/Driver-Vehicle-Mapping.git
    cd Driver-Vehicle-Mapping
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```env
    MONGO_URI=your_mongodb_connection_string
    PORT=3000
    ```

4. Start the server:
    ```bash
    npm start
    ```

## API Endpoints

### Drivers
- **GET /drivers**: Get all drivers
- **POST /drivers**: Add a new driver
- **GET /drivers/:id**: Get a driver by ID
- **PUT /drivers/:id**: Update a driver by ID
- **DELETE /drivers/:id**: Delete a driver by ID

### Vehicles
- **GET /vehicles**: Get all vehicles
- **POST /vehicles**: Add a new vehicle
- **GET /vehicles/:id**: Get a vehicle by ID
- **PUT /vehicles/:id**: Update a vehicle by ID
- **DELETE /vehicles/:id**: Delete a vehicle by ID

### Assignments
- **POST /assignments**: Assign a vehicle to a driver
- **GET /assignments/driver/:driverId**: Get all vehicles assigned to a driver

### Users
- **GET /users**: Get all users
- **POST /users**: Add a new user
- **GET /users/:id**: Get a user by ID
- **PUT /users/:id**: Update a user by ID
- **DELETE /users/:id**: Delete a user by ID

## Models

### Driver
```javascript
const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    assignedVehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }
});

module.exports = mongoose.model('Driver', driverSchema);

 ## Scalibility

 The System is designed with scalibility in mind. Some potential considerations:
 - **Database**: MongoDB is used as the database, which is designed to handle large amounts of data
- Caching: Using efficient caching mechanisms will likely reduce the load on the database by storing frequently accessed data in memory.

- Carbon Footprint Tracking: Implement features that monitors and reports carbon emissions based on vehicle usage, fuel consumption, and mileage to promote environment sustainability among users.

- Women Safety Features: Integrate safety features such as real-time location tracking, emergency alerts, and safe route suggestions to enhance the safety of women drivers.

##IMPLEMENTATION PLAN##

Level 0:
1. Create the Driver Model:
driverSchema with fields: name, email, phone, and assignedVehicle.
2. Create the Vehicle Model:
vehicleSchema with fields: make, model, year, and driverId.
3. Build the APIs:
Create Driver:API endpoint to add a new driver.
Get Drivers: API endpoint to fetch all drivers or search by name/phone
Assign Vehicle: API endpoint to assign a vehicle to a driver
Unassign Vehicle: API endpoint to remove a vehicle from a driver.

Frontend Implementation:
1. Driver Creation Form
2. Vehicle Assignment

Level 1: Time Scheduling and Assignment Conflict Handling
Backend Implementation:
1. Schedule Schema:
Schema to store schedule details with fields: driver, vehicle, start time, and end time
2. Build the APIs:
Schedule Assignment: API to assign a driver to a vehicle for a specific time.
Conflict Handling: Logic to check for overlapping assignments and prevent conflicts.

Frontend Implementation:
1. Schedule Assignment Form:
    Form to choose driver, vehicle, and time range.
    Display conflict messages if there are overlaps

