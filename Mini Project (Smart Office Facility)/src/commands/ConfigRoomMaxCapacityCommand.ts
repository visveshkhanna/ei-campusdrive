import { OfficeConfiguration } from "../models/OfficeConfiguration";
import { UserSession } from "../models/UserSession";

export class ConfigRoomMaxCapacityCommand {
  private officeConfig: OfficeConfiguration;
  private userSession: UserSession;
  constructor(officeConfig: OfficeConfiguration, userSession: UserSession) {
    this.officeConfig = officeConfig;
    this.userSession = userSession;
  }
  execute(roomId: number, capacity: number): string {
    if (this.userSession.getRole() !== "admin") {
      return "You are not authorized to perform this action.";
    }
    return this.officeConfig.setRoomMaxCapacity(roomId, capacity);
  }
}
