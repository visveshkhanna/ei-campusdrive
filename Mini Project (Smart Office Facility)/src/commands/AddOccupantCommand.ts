import { OfficeConfiguration } from "../models/OfficeConfiguration";
import { UserSession } from "../models/UserSession";

export class AddOccupantCommand {
  private officeConfig: OfficeConfiguration;
  private userSession: UserSession;
  constructor(officeConfig: OfficeConfiguration, userSession: UserSession) {
    this.officeConfig = officeConfig;
    this.userSession = userSession;
  }
  execute(roomId: number, count: number): string {
    if (this.userSession.getRole() !== "admin") {
      return "You are not authorized to perform this action.";
    }
    const room = this.officeConfig.getRoom(roomId);
    if (!room) {
      return `Room ${roomId} does not exist.`;
    }
    if (room.booking.length <= 0) {
      return `Room ${roomId} is not booked. Cannot add occupants.`;
    }
    const message = room.addOccupants(count);
    this.officeConfig.notifyObservers(room);
    return message;
  }
}
