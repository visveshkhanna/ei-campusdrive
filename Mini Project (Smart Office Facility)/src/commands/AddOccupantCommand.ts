import { OfficeConfiguration } from "../models/OfficeConfiguration";

export class AddOccupantCommand {
  execute(roomId: number, count: number): string {
    const officeConfig = OfficeConfiguration.getInstance();
    const room = officeConfig.getRoom(roomId);
    if (!room) {
      return `Room ${roomId} does not exist.`;
    }
    const message = room.addOccupants(count);
    officeConfig.notifyObservers(room);
    return message;
  }
}
