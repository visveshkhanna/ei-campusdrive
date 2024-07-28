import { Booking } from "../models/Booking";
import { OfficeConfiguration } from "../models/OfficeConfiguration";
import { Room } from "../models/Room";
import { Logger } from "../utils/Logger";

export class BlockRoomCommand {
  checkBooking(room: Room, start: Date, end: Date): boolean {
    const startTime = start.getTime();
    const endTime = end.getTime();

    // if overlapping bookings exist, return false
    for (const booking of room.booking) {
      if (
        startTime < booking.end.getTime() &&
        endTime > booking.start.getTime()
      ) {
        return true;
      }
    }

    // no overlap
    return false;
  }

  execute(roomId: number, time: string, duration: number): string {
    const officeConfig = OfficeConfiguration.getInstance();
    const room = officeConfig.getRoom(roomId);
    if (!room) {
      return `Room ${roomId} does not exist.`;
    }

    const [hours, minutes, seconds] = time.split(":").map(Number);
    const startTime = new Date();
    startTime.setHours(hours);
    startTime.setMinutes(minutes);
    startTime.setSeconds(seconds);
    startTime.setMilliseconds(0);

    const endTime = new Date(startTime);
    endTime.setMinutes(endTime.getMinutes() + duration);

    const currentTime = new Date();

    if (startTime < currentTime) {
      return `Cannot book a room in the past. Please choose a future time.`;
    }

    if (startTime.getDate() !== endTime.getDate()) {
      return `Bookings must be completed within today. You cannot book beyond midnight.`;
    }

    if (this.checkBooking(room, startTime, endTime)) {
      return `Room ${roomId} is already booked during this time. Cannot book.`;
    }

    const booking = new Booking(startTime, endTime);
    room.booking.push(booking);

    Logger.log(
      `Booking ID: ${
        booking.id
      } Room ${roomId} booked from ${startTime.toTimeString()} - ${endTime.toTimeString()}`
    );
    return `Room ${roomId} booked from ${startTime.toTimeString()} for ${duration} minutes.`;
  }
}