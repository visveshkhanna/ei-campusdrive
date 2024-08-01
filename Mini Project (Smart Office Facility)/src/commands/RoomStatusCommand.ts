import { OfficeConfiguration } from "../models/OfficeConfiguration";
import { UserSession } from "../models/UserSession";

export class RoomStatusCommand {
  private officeConfig: OfficeConfiguration;
  private userSession: UserSession;
  constructor(officeConfig: OfficeConfiguration, userSession: UserSession) {
    this.officeConfig = officeConfig;
    this.userSession = userSession;
  }
  execute(roomId: number): string {
   
    if (this.userSession.getRole() !== "admin") {
      return "You are not authorized to perform this action.";
    }
    const room = this.officeConfig.getRoom(roomId);
    if (!room) {
      return `Room ${roomId} does not exist.`;
    }
    return `Room ${roomId} is currently ${
      room.occupied ? "occupied" : "unoccupied"
    } and ${JSON.stringify(room.booking)}.`;
  }
}
