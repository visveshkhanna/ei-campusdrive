import { OfficeConfiguration } from "../models/OfficeConfiguration";
import { UserSession } from "../models/UserSession";

export class ConfigRoomCommand {
  execute(count: number): string {
    const officeConfig = OfficeConfiguration.getInstance();
    const userSession = UserSession.getInstance();
    if (userSession.getRole() !== "admin") {
      return "You are not authorized to perform this action.";
    }
    return officeConfig.configureRooms(count);
  }
}
