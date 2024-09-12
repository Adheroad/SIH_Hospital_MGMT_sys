import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import { createServer } from 'http';
import { Server } from 'socket.io';
import loginRoute from './routes/auth.js';

dotenv.config();

const app = express();
const server = createServer(app);

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from frontend
    methods: ['GET', 'POST'],
}));

// API routes
app.use('/api', loginRoute); // Login and authentication routes

// MongoDB connection using Mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const port = process.env.PORT || 5000;
let ambulanceLocation = { latitude: 28.7041, longitude: 77.1025 }; // Initial ambulance location
let intervalId = null; // Store the interval ID so it can be stopped

// WebSocket connection (Socket.io)
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
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

// Error handling middleware (optional but recommended)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
