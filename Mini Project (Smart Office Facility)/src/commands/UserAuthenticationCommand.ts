import { OfficeConfiguration } from "../models/OfficeConfiguration";
import { UserSession } from "../models/UserSession";

export class UserAuthenticationCommand {
  me(): string {
    const userSession = UserSession.getInstance();
    return "You are logged in as " + userSession.getRole();
  }
  execute(): string {
    const officeConfig = OfficeConfiguration.getInstance();
    const userSession = UserSession.getInstance();
    userSession.setRole("");
    officeConfig.updateStatistics(
      `User ${userSession.getRole()} logged out successfully.`
    );
    return "You're logged out successfully.";
  }
}
