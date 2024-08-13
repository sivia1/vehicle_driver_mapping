import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';

const ScheduleAssignmentForm = ({ drivers, vehicles, existingAssignments }) => {
    const { control, handleSubmit, watch, reset } = useForm();
    const [conflictMessage, setConflictMessage] = useState('');

    const onSubmit = (data) => {
    if (checkForConflict(data)) {
        setConflictMessage('The selected time range conflicts with an existing assignment.');
    } else {
        setConflictMessage('');
        console.log('Assignment submitted:', data);
      // Add your logic to save the assignment
    }
};

const checkForConflict = ({ driver, vehicle, startTime, endTime }) => {
    return existingAssignments.some((assignment) => {
        const isDriverConflict = assignment.driver === driver && (
        (startTime >= assignment.startTime && startTime < assignment.endTime) ||
        (endTime > assignment.startTime && endTime <= assignment.endTime)
    );

        const isVehicleConflict = assignment.vehicle === vehicle && (
        (startTime >= assignment.startTime && startTime < assignment.endTime) ||
        (endTime > assignment.startTime && endTime <= assignment.endTime)
    );

    return isDriverConflict || isVehicleConflict;
    });
};

    return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white shadow-md">
        <h2 className="text-lg font-semibold mb-4">Schedule Assignment</h2>
        <div className="mb-4">
        <label htmlFor="driver" className="block font-medium">Select Driver:</label>
        <Controller
        name="driver"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <select {...field} className="w-full border border-gray-300 p-2 rounded">
            <option value="" disabled>Select a driver</option>
            {/* {drivers.map((driver) => (
                <option key={driver.id} value={driver.id}>{driver.name}</option>
            ))} */}
            </select>
        )}
        />
    </div>

    <div className="mb-4">
        <label htmlFor="vehicle" className="block font-medium">Select Vehicle:</label>
        <Controller
        name="vehicle"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <select {...field} className="w-full border border-gray-300 p-2 rounded">
            <option value="" disabled>Select a vehicle</option>
            {/* {vehicles.map((vehicle) => (
                <option key={vehicle.id} value={vehicle.id}>{vehicle.name}</option>
            ))} */}
            </select>
        )}
        />
    </div>

    <div className="mb-4">
        <label htmlFor="startTime" className="block font-medium">Start Time:</label>
        <Controller
        name="startTime"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <input
            type="datetime-local"
            {...field}
            className="w-full border border-gray-300 p-2 rounded"
            />
        )}
        />
    </div>

    <div className="mb-4">
        <label htmlFor="endTime" className="block font-medium">End Time:</label>
        <Controller
        name="endTime"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <input
            type="datetime-local"
            {...field}
            className="w-full border border-gray-300 p-2 rounded"
            />
        )}
        />
    </div>

    {conflictMessage && (
        <div className="mb-4 text-red-600">{conflictMessage}</div>
    )}

    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        Submit Assignment
    </button>
    </form>
    );
};

export default ScheduleAssignmentForm;