import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/booking', bookingRoutes);
app.use('/public', express.static('public')); // Hosting JSON files

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
