import { OfficeConfiguration } from "../models/OfficeConfiguration";

export class ConfigRoomMaxCapacityCommand {
  execute(roomId: number, capacity: number): string {
    const officeConfig = OfficeConfiguration.getInstance();
    return officeConfig.setRoomMaxCapacity(roomId, capacity);
  }
}
