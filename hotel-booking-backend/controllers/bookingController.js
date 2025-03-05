import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const bookHotel = async (req, res) => {
  const { userId, hotelId, checkInDate, checkOutDate, totalGuests } = req.body;
  try {
    const booking = await prisma.booking.create({
      data: { userId, hotelId, checkInDate, checkOutDate, totalGuests }
    });
    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
