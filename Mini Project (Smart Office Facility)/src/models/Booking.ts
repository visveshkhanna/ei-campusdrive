import { randomUUID } from "crypto";
import { Logger } from "../utils/Logger";
import { UserSession } from "./UserSession";
import { Room } from "./Room";
import { Email } from "./Email";
import { OfficeConfiguration } from "./OfficeConfiguration";

export class Booking {
  public id: string;
  public start: Date;
  public end: Date;
  public user: string;
  constructor(user: string, start: Date, end: Date) {
    this.id = randomUUID();
    this.start = start;
    this.end = end;
    this.user = user;
  }

  notify(): void {
    // notify the user about the booking cancellation due to inactivity
    Email.send(
      this.user,
      "Booking Cancellation",
      `Booking cancellation for the booking id ${
        this.id
      } scheduled from ${this.start.toLocaleString()} to ${this.start.toLocaleString()} due to inactivity for 5 minutes. THank you`
    );
  }

  statusCheck(room: Room): void {
    const officeConfig = OfficeConfiguration.getInstance();
    const userInstance = UserSession.getInstance();
    const booking = room.booking.find((booking) => booking.id === this.id);
    if (!booking) {
      return;
    }
    if (booking.user !== userInstance.getRole()) {
      return;
    }
    Logger.log(`Checking status of room ${room.id}`);

    if (!room.occupied) {
      room.officeConfig.updateStatistics(
        `Room ${room.id} is unoccupied due to inactivity for 5 minutes with booking id ${booking.id}`
      );
      room.booking = room.booking.filter((booking) => booking.id !== this.id);
      this.notify();
      officeConfig.notifyObservers(room);
      Logger.log(
        `Booking with booking id ${booking.id} for Room ${room.id} cancelled successfully due to inactivity.`
      );
      return;
    }
    Logger.log(`Result: Room ${room.id} is occupied`);
  }
}
