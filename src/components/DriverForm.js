//Filename: DriverForm.js

import React from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';

const DriverForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            await axios.post('http://localhost:5000/api/drivers', data);
            alert('Driver information submitted successfully!');
            reset();
        } catch (error) {
            console.error( 'Error submitting driver data:', error);
            alert('Failed to submit driver information.');
        }
    };

    return (
        <div className="container">
            <h1>Driver Information</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="firstName">First Name*</label>
                <input
                    id="firstName"
                    {...register('firstName', {required: 'First Name is required '})}
                    placeholder="Enter First Name"
                />
                {errors.firstName && <p className="error">{errors.firstName.message}</p>}

                <label htmlFor="lastName">Last Name*</label>
                <input
                    id="lastName"
                    {...register('lastName', { required: 'Last name is required' })}
                    placeholder="Enter Last Name"
                />
                {errors.lastName && <p className="error">{errors.lastName.message}</p>}

                <label htmlFor="email">Email*</label>
                <input
                    id="email"
                    type="email"
                    {...register('email', {required: 'Email is required' })}
                    placeholder="Enter Email"
                />
                {errors.email && <p className="error">{errors.email.message}</p>}

                <label htmlFor="contact">Contact Number*</label>
                <input
                    id="contact"
                    type="tel"
                    {...register('contact', { required: 'Contact number is required' })}
                    placeholder="Enter Contact Number"
                />
                {errors.contact && <p className="error">{errors.contact.message}</p>}

                <label htmlFor="vehicle">Assigned Vehicle*</label>
                <input
                    id="vehicle"
                    {...register('vehicle', { required: 'Vehicle assignment is required'})}
                    placeholder="Enter Vehicle Number"
                />
                {errors.vehicle && <p className="error">{errors.vehicle.message}</p>}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default DriverForm;