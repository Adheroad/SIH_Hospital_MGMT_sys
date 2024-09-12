import React, { useState } from 'react';
import './Registeration.css';

const Registeration = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        phone: '',
        email: '',
        dob: '',
        bloodGroup: '',
        medicalHistory: '',
        abhaId: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { phone } = formData;
        if (!phone.match(/^\d{10}$/)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        console.log(formData);  // You can replace this with an API call to submit the data
        alert('Form submitted successfully');
    };

    return (
        <div className="form-container">
            <h2>Patient Registration Form</h2>
            <form onSubmit={handleSubmit} id="registrationForm">
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        type="text" 
                        name="firstName" 
                        id="firstName" 
                        value={formData.firstName} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        type="text" 
                        name="lastName" 
                        id="lastName" 
                        value={formData.lastName} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select 
                        name="gender" 
                        id="gender" 
                        value={formData.gender} 
                        onChange={handleChange} 
                        required
                    >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                        type="tel" 
                        name="phone" 
                        id="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                        placeholder="Enter 10-digit phone number" 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input 
                        type="date" 
                        name="dob" 
                        id="dob" 
                        value={formData.dob} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="abhaId">ABHA ID</label>
                    <input 
                        type="text" 
                        name="abhaId" 
                        id="abhaId" 
                        value={formData.abhaId} 
                        onChange={handleChange} 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="bloodGroup">Blood Group</label>
                    <select 
                        name="bloodGroup" 
                        id="bloodGroup" 
                        value={formData.bloodGroup} 
                        onChange={handleChange} 
                        required
                    >
                        <option value="">Select</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="medicalHistory">Medical History (if any)</label>
                    <textarea 
                        name="medicalHistory" 
                        id="medicalHistory" 
                        value={formData.medicalHistory} 
                        onChange={handleChange} 
                    />
                </div>

                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default Registeration;
