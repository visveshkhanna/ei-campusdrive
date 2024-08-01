import { OfficeConfiguration } from "../models/OfficeConfiguration";
import { UserSession } from "../models/UserSession";

export class OfficeStatisticsCommand {
  private officeConfig: OfficeConfiguration;
  private userSession: UserSession;
  constructor(officeConfig: OfficeConfiguration, userSession: UserSession) {
    this.officeConfig = officeConfig;
    this.userSession = userSession;
  }
  execute(): string {
    if (this.userSession.getRole() !== "admin") {
      return "You are not authorized to perform this action.";
    }
    const statistics = this.officeConfig.getStatistics();
    return statistics;
  }
}
