import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const port = process.env.PORT || 5000;
let ambulanceLocation = { latitude: 28.7041, longitude: 77.1025 }; // Initial ambulance location
let intervalId = null; // Store the interval ID so it can be stopped


app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from frontend
    methods: ['GET', 'POST'],
}));

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000', // Adjust this if needed
        methods: ['GET', 'POST']
    },
    transports: ['websocket', 'polling'] // Ensure fallback transport
});



io.on('connection', (socket) => {
    console.log('Client connected');
    
    socket.on('requestAmbulance', () => {
        
        
        // Emit initial ambulance location
        socket.emit('ambulanceLocation', ambulanceLocation);
        console.log('SOS button clicked');
        // Start updating ambulance location every 3 seconds
        intervalId = setInterval(() => {
            ambulanceLocation.latitude += (Math.random() - 0.5) * 0.001;
            ambulanceLocation.longitude += (Math.random() - 0.5) * 0.001;
            io.emit('ambulanceLocation', ambulanceLocation); // Emit to all clients
        }, 3000);
        
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
        if (intervalId) {
            clearInterval(intervalId); // Stop updating location when client disconnects
        }
    });
});


server.listen(5000, () => {
    console.log('Server is running on port 5000');
});
