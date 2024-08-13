import React, { useEffect, useState } from 'react';
 import axios from 'axios';

const VehicleList = () => {
    const [drivers, setDrivers] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [selectedDriver, setSelectedDriver] = useState('');
    const [selectedVehicle, setSelectedVehicle] = useState('');

    useEffect(() => {
        // Fetch drivers and vehicles
        const fetchData = async () => {
            try {
                const driversResponse = await axios.get('http://localhost:5000/api/drivers');
                const vehiclesResponse = await axios.get('http://localhost:5000/api/vehicles');
                setDrivers(driversResponse.data);
                setVehicles(vehiclesResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleAssignment = async () => {
        try {
            await axios.post('http://localhost:5000/api/assign', {
                driverId: selectedDriver,
                vehicleId: selectedVehicle,
            });
            alert('Vehicle assigned successfully!');
        } catch (error) {
            console.error('Error assigning vehicle:', error);
            alert('Failed to assign vehicle.');
        }
    };

    return (
        <div className="container">
            <h1>Vehicle Assignment</h1>
            <div>
                <label htmlFor="driver">Select Driver:</label>
                <select
                    id="driver"
                    value={selectedDriver}
                    onChange={(e) => setSelectedDriver(e.target.value)}
                >
                    <option value="">--Select Driver--</option>
                    {drivers.map(driver => (
                        <option key={driver._id} value={driver._id}>{driver.firstName} {driver.lastName}</option>
                    ))}
                </select>

                <label htmlFor="vehicle">Select Vehicle:</label>
                <select
                    id="vehicle"
                    value={selectedVehicle}
                    onChange={(e) => setSelectedVehicle(e.target.value)}
                >
                    <option value="">--Select Vehicle--</option>
                    {vehicles.map(vehicle => (
                        <option key={vehicle._id} value={vehicle._id}>{vehicle.model}</option>
                    ))}
                </select>

                <button onClick={handleAssignment}>Assign Vehicle</button>
            </div>
        </div>
    );
};

export default VehicleList;