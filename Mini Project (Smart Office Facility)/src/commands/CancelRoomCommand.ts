import { OfficeConfiguration } from "../models/OfficeConfiguration";

export class CancelRoomCommand {
  execute(roomId: number, bookingId: string): string {
    const officeConfig = OfficeConfiguration.getInstance();
    const room = officeConfig.getRoom(roomId);
    if (!room) {
      return `Room ${roomId} does not exist.`;
    }
    if (room.booking.length === 0) {
      return `Room ${roomId} is not booked. Cannot cancel booking.`;
    }

    if (!bookingId) {
      room.booking = [];
      return `All Bookings for Room ${roomId} cancelled successfully.`;
    }

    const booking = room.booking.find((booking) => booking.id === bookingId);
    if (!booking) {
      return `Booking ${bookingId} does not exist. Cannot cancel.`;
    }
    room.booking = room.booking.filter((booking) => booking.id !== bookingId);

    return `Booking with booking id ${booking.id} for Room ${roomId} cancelled successfully.`;
  }
}
