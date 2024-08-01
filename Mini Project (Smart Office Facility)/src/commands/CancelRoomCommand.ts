import { OfficeConfiguration } from "../models/OfficeConfiguration";
import { UserSession } from "../models/UserSession";
import { Logger } from "../utils/Logger";

export class CancelRoomCommand {
  private officeConfig: OfficeConfiguration;
  private userSession: UserSession;
  constructor(officeConfig: OfficeConfiguration, userSession: UserSession) {
    this.officeConfig = officeConfig;
    this.userSession = userSession;
  }
  execute(roomId: number, bookingId: string): string {
    const room = this.officeConfig.getRoom(roomId);
    if (!room) {
      return `Room ${roomId} does not exist.`;
    }
    if (room.booking.length === 0) {
      return `Room ${roomId} is not booked. Cannot cancel booking.`;
    }

    if (!bookingId) {
      // check if all the bookings are done by the current user
      const bookings = room.booking.filter(
        (booking) => booking.user === this.userSession.getRole()
      );
      if (this.userSession.getRole() !== "admin") {
        return `You are not authorized to cancel all bookings. Please cancel only your bookings.`;
      }
      room.booking = [];
      return `All Bookings for Room ${roomId} cancelled successfully.`;
    }

    const booking = room.booking.find((booking) => booking.id === bookingId);
    if (!booking) {
      return `Booking ${bookingId} does not exist. Cannot cancel.`;
    }
    if (
      this.userSession.getRole() !== "admin" &&
      booking.user !== this.userSession.getRole()
    ) {
      return `You are not authorized to cancel booking with id ${bookingId}. Please cancel only your bookings.`;
    }
    room.booking = room.booking.filter((booking) => booking.id !== bookingId);

    room.officeConfig.updateStatistics(
      `Booking with booking id ${booking.id} for Room ${roomId} cancelled successfully.`
    );
    this.officeConfig.notifyObservers(room);
    return `Booking with booking id ${booking.id} for Room ${roomId} cancelled successfully.`;
  }
}
