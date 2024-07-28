import { OfficeConfiguration } from "../models/OfficeConfiguration";

export class ConfigRoomCommand {
  execute(count: number): string {
    const officeConfig = OfficeConfiguration.getInstance();
    return officeConfig.configureRooms(count);
  }
}
