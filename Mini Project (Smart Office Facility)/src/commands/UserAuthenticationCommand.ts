import { OfficeConfiguration } from "../models/OfficeConfiguration";
import { UserSession } from "../models/UserSession";

export class UserAuthenticationCommand {
  private officeConfig: OfficeConfiguration;
  private userSession: UserSession;
  constructor(officeConfig: OfficeConfiguration, userSession: UserSession) {
    this.officeConfig = officeConfig;
    this.userSession = userSession;
  }
  me(): string {
    return "You are logged in as " + this.userSession.getRole();
  }
  execute(): string {
    this.userSession.setRole("");
    this.officeConfig.updateStatistics(
      `User ${this.userSession.getRole()} logged out successfully.`
    );
    return "You're logged out successfully.";
  }
}
