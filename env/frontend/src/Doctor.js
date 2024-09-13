import React, { useState } from 'react';
import './Doctor.css';

const Doctor = () => {
    // Example data: list of 6 doctors with their details
    const doctorsList = [
        { name: 'Dr. Anshul Dhawan', specialization: 'Cardiologist', available: '9 AM - 5 PM', department: 'Cardiology' },
        { name: 'Dr. Shashwat Singh', specialization: 'Dermatologist', available: '11 AM - 3 PM', department: 'Dermatology' },
        { name: 'Dr. Shivam Sharma', specialization: 'Neurologist', available: '12 PM - 8 PM', department: 'Neurology' },
        { name: 'Dr. Simar', specialization: 'Pediatrician', available: '8 AM - 4 PM', department: 'Pediatrics' },
        { name: 'Dr. Ritwik Thakur', specialization: 'Orthopedic', available: '10 AM - 6 PM', department: 'Orthopedics' },
        { name: 'Dr. Simran', specialization: 'Gynecologist', available: '9 AM - 5 PM', department: 'Gynecology' }
    ];

    const [selectedDepartment, setSelectedDepartment] = useState('All');

    const handleFilterChange = (event) => {
        setSelectedDepartment(event.target.value);
    };

    const filteredDoctors = selectedDepartment === 'All'
        ? doctorsList
        : doctorsList.filter(doctor => doctor.department === selectedDepartment);

    return (
        <div className="doctor-container">
            <h2>Doctor Availability</h2>

            <div className="filter-section">
                <label htmlFor="department-filter">Filter by Department:</label>
                <select
                    id="department-filter"
                    value={selectedDepartment}
                    onChange={handleFilterChange}
                >
                    <option value="All">All</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Dermatology">Dermatology</option>
                    <option value="Neurology">Neurology</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Orthopedics">Orthopedics</option>
                    <option value="Gynecology">Gynecology</option>
                </select>
            </div>

            <div className="doctor-grid">
                {filteredDoctors.map((doctor, index) => (
                    <div key={index} className="doctor-card">
                        <h3>{doctor.name}</h3>
                        <p><strong>Specialization:</strong> {doctor.specialization}</p>
                        <p><strong>Available:</strong> {doctor.available}</p>
                        <p><strong>Department:</strong> {doctor.department}</p>
                        <button className="book-btn">Book Appointment</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Doctor;
