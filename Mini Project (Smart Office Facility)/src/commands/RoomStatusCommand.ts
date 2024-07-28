import { OfficeConfiguration } from "../models/OfficeConfiguration";

export class RoomStatusCommand {
  execute(roomId: number): string {
    const officeConfig = OfficeConfiguration.getInstance();
    const room = officeConfig.getRoom(roomId);
    if (!room) {
      return `Room ${roomId} does not exist.`;
    }
    return `Room ${roomId} is currently ${
      room.occupied ? "occupied" : "unoccupied"
    } and ${room.booking}.`;
  }
}
