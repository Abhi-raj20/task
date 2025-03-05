import express from 'express';
import { bookHotel } from '../controllers/bookingController.js';

const router = express.Router();
router.post('/book', bookHotel);

export default router;
