// src/components/MapComponent.js
import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet/dist/leaflet.css'; // Ensure Leaflet CSS is imported

const userIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/447/447031.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const ambulanceIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2963/2963526.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const MapComponent = ({ userLocation, ambulanceLocation }) => {
    const mapRef = useRef(null);

    useEffect(() => {
        if (userLocation && ambulanceLocation && mapRef.current) {
            const map = mapRef.current;
            map.setView([userLocation.latitude, userLocation.longitude], 13);

            // Clear existing routing controls
            map.eachLayer(layer => {
                if (layer instanceof L.Routing.Control) {
                    map.removeControl(layer);
                }
            });

            // Add new routing control
            L.Routing.control({
                waypoints: [
                    L.latLng(userLocation.latitude, userLocation.longitude),
                    L.latLng(ambulanceLocation.latitude, ambulanceLocation.longitude)
                ],
                routeWhileDragging: true
            }).addTo(map);
        }
    }, [userLocation, ambulanceLocation]);

    return (
        <MapContainer
            center={[userLocation?.latitude || 0, userLocation?.longitude || 0]}
            zoom={13}
            style={{ height: '450px', width: '100%' }}
            whenCreated={mapInstance => { mapRef.current = mapInstance; }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {userLocation && (
                <Marker position={[userLocation.latitude, userLocation.longitude]} icon={userIcon}>
                    <Popup>You are here!</Popup>
                </Marker>
            )}

            {ambulanceLocation && (
                <Marker position={[ambulanceLocation.latitude, ambulanceLocation.longitude]} icon={ambulanceIcon}>
                    <Popup>Ambulance is here!</Popup>
                </Marker>
            )}
        </MapContainer>
    );
};

export default MapComponent;
