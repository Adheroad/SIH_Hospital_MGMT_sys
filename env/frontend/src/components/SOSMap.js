// src/components/SOSMap.js
import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import io from 'socket.io-client';
import 'leaflet/dist/leaflet.css';

// Icons
const userIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/447/447031.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const ambulanceIcon = new L.Icon({
  iconUrl: 'https://img.icons8.com/?size=100&id=950&format=png&color=000000',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const socket = io('http://localhost:5000');

const SOSMap = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [ambulanceLocation, setAmbulanceLocation] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error fetching user location: ", error);
        }
      );
    }
  }, []);

  useEffect(() => {
    socket.emit('requestAmbulance');

    socket.on('ambulanceLocation', (location) => {
      console.log('Received ambulance location:', location); // Debugging line
      setAmbulanceLocation(location);
    });

    return () => {
      socket.off('ambulanceLocation');
    };
  }, []);

  if (!userLocation || !ambulanceLocation) {
    return <div>Loading map...</div>;
  }

  return (
    <MapContainer
      center={[userLocation.latitude, userLocation.longitude]}
      zoom={13}
      style={{ height: '100vh', width: '100%' }}
      whenCreated={(mapInstance) => { mapRef.current = mapInstance; }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[userLocation.latitude, userLocation.longitude]} icon={userIcon}>
        <Popup>You are here!</Popup>
      </Marker>
      <Marker position={[ambulanceLocation.latitude, ambulanceLocation.longitude]} icon={ambulanceIcon}>
        <Popup>Ambulance is here!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default SOSMap;