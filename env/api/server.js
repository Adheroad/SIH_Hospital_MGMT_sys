import express from 'express';
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
let ambulanceLocation = { latitude: 30.7350, longitude: 76.7886 }; // ISBT 17 Chandigarh coordinates
let intervalId = null; // Store the interval ID so it can be stopped
let clientsCount = 0; // Count of connected clients

// WebSocket connection (Socket.io)
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
  transports: ['websocket', 'polling'], // Ensure fallback transport
});

io.on('connection', (socket) => {
  console.log('Client connected');
  clientsCount++;

  // Send initial ambulance location
  socket.emit('ambulanceLocation', ambulanceLocation);

  // Handle SOS button click
  socket.on('requestAmbulance', () => {
    console.log('SOS button clicked');

    // Start updating ambulance location every 3 seconds
    if (!intervalId) {
      intervalId = setInterval(() => {
        ambulanceLocation.latitude += (Math.random() - 0.5) * 0.001;
        ambulanceLocation.longitude += (Math.random() - 0.5) * 0.001;
        io.emit('ambulanceLocation', ambulanceLocation); // Emit to all clients
      }, 3000);
    }
  });

  // Clean up on disconnect
  socket.on('disconnect', () => {
    console.log('Client disconnected');
    clientsCount--;

    if (clientsCount === 0 && intervalId) {
      clearInterval(intervalId); // Stop updating location when no clients are connected
      intervalId = null; // Reset intervalId
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
