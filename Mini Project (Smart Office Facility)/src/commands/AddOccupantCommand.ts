import { OfficeConfiguration } from "../models/OfficeConfiguration";
import { UserSession } from "../models/UserSession";

export class AddOccupantCommand {
  constructor() {}
  execute(roomId: number, count: number): string {
    const officeConfig = OfficeConfiguration.getInstance();
    const userSession = UserSession.getInstance();
    if (userSession.getRole() !== "admin") {
      return "You are not authorized to perform this action.";
    }
    const room = officeConfig.getRoom(roomId);
    if (!room) {
      return `Room ${roomId} does not exist.`;
    }
    if (room.booking.length <= 0) {
      return `Room ${roomId} is not booked. Cannot add occupants.`;
    }
    const message = room.addOccupants(count);
    officeConfig.notifyObservers(room);
    return message;
  }
}
