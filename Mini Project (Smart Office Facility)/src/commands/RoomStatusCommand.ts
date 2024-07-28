import { OfficeConfiguration } from "../models/OfficeConfiguration";
import { UserSession } from "../models/UserSession";

export class RoomStatusCommand {
  execute(roomId: number): string {
    const officeConfig = OfficeConfiguration.getInstance();
    const userSession = UserSession.getInstance();

    if (userSession.getRole() !== "admin") {
      return "You are not authorized to perform this action.";
    }
    const room = officeConfig.getRoom(roomId);
    if (!room) {
      return `Room ${roomId} does not exist.`;
    }
    return `Room ${roomId} is currently ${
      room.occupied ? "occupied" : "unoccupied"
    } and ${JSON.stringify(room.booking)}.`;
  }
}
