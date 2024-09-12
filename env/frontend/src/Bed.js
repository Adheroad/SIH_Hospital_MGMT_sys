import React, { useState } from 'react';
import './Bed.css';

const Bed = () => {
    const totalBeds = 100; // 100 beds, across 10 floors
    const bedsPerFloor = 10;
    const initialBeds = Array(totalBeds).fill(false); // All beds are initially available
    const [beds, setBeds] = useState(initialBeds);
    const [bookedCount, setBookedCount] = useState(0); // Keep track of booked beds by the user

    const handleBookBed = (index) => {
        if (bookedCount >= 2) {
            alert("You can't book more than 2 beds.");
            return;
        }

        const updatedBeds = [...beds];
        if (!updatedBeds[index]) {
            updatedBeds[index] = true; // Mark the bed as booked
            setBeds(updatedBeds);
            setBookedCount(bookedCount + 1); // Increase the count of booked beds
            alert(`Bed ${index + 1} booked successfully!`);
        } else {
            alert(`Bed ${index + 1} is already booked.`);
        }
    };

    return (
        <div className="bed-container">
            <h2>Real-Time Bed Management</h2>

            {[...Array(10)].map((_, floor) => (
                <div key={floor} className="floor">
                    <h3>Floor {floor + 1}</h3>
                    <div className="bed-grid">
                        {beds
                            .slice(floor * bedsPerFloor, (floor + 1) * bedsPerFloor)
                            .map((isBooked, index) => {
                                const bedIndex = floor * bedsPerFloor + index;
                                return (
                                    <div
                                        key={bedIndex}
                                        className={`bed ${isBooked ? 'booked' : 'available'}`}
                                        onClick={() => handleBookBed(bedIndex)}
                                    >
                                        {isBooked ? 'Booked' : `Bed ${bedIndex + 1}`}
                                    </div>
                                );
                            })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Bed;
