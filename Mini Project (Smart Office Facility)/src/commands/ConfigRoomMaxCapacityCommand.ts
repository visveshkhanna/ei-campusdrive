import { OfficeConfiguration } from "../models/OfficeConfiguration";
import { UserSession } from "../models/UserSession";

export class ConfigRoomMaxCapacityCommand {
  execute(roomId: number, capacity: number): string {
    const officeConfig = OfficeConfiguration.getInstance();
    const userSession = UserSession.getInstance();
    if (userSession.getRole() !== "admin") {
      return "You are not authorized to perform this action.";
    }
    return officeConfig.setRoomMaxCapacity(roomId, capacity);
  }
}
