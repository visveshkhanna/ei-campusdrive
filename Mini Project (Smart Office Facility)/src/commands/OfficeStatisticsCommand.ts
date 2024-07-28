import { OfficeConfiguration } from "../models/OfficeConfiguration";
import { UserSession } from "../models/UserSession";

export class OfficeStatisticsCommand {
  execute(): string {
    const officeConfig = OfficeConfiguration.getInstance();
    const userSession = UserSession.getInstance();
    if (userSession.getRole() !== "admin") {
      return "You are not authorized to perform this action.";
    }
    const statistics = officeConfig.getStatistics();
    return statistics;
  }
}
