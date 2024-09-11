import React, { useState, useEffect } from 'react';
import MapComponent from './components/MapComponent';
import io from 'socket.io-client';

const socket = io('http://localhost:5000', {
    transports: ['websocket'] // Ensure proper transport fallback
});

function App() {
    const [userLocation, setUserLocation] = useState(null);
    const [ambulanceLocation, setAmbulanceLocation] = useState({ latitude: 30.7353, longitude: 76.7891 }); // Default location

    useEffect(() => {
        // Function to handle geolocation updates
        const handleLocation = (position) => {
            const userLoc = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            };
            setUserLocation(userLoc);
        };

        // Check if geolocation is supported
        if (navigator.geolocation) {
            // Use watchPosition for real-time updates
            const watchId = navigator.geolocation.watchPosition(
                handleLocation,
                (error) => {
                    console.error("Error fetching location: ", error);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0,
                }
            );

            // Cleanup the watcher on component unmount
            return () => {
                navigator.geolocation.clearWatch(watchId);
            };
        }

        // Listen for real-time ambulance location updates
        socket.on('ambulanceLocation', (location) => {
            console.log('Ambulance location received: ', location);
            setAmbulanceLocation(location);
        });

        // Cleanup socket listeners on component unmount
        return () => {
            socket.off('ambulanceLocation');
        };
    }, []); // Empty dependency array ensures this runs once on mount

    return (
        <div>
            <h1>Hospital Dashboard</h1>
            <button onClick={() => {
                console.log('SOS button clicked, emitting requestAmbulance');
                socket.emit('requestAmbulance');
            }}>
                Send SOS
            </button>
            {userLocation && (
                <MapComponent userLocation={userLocation} ambulanceLocation={ambulanceLocation} />
            )}
        </div>
    );
}

export default App;
