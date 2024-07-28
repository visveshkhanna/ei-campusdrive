import { AddOccupantCommand } from "../commands/AddOccupantCommand";
import { BlockRoomCommand } from "../commands/BlockRoomCommand";
import { CancelRoomCommand } from "../commands/CancelRoomCommand";
import { ConfigRoomCommand } from "../commands/ConfigRoomCommand";
import { ConfigRoomMaxCapacityCommand } from "../commands/ConfigRoomMaxCapacityCommand";
import { OfficeStatisticsCommand } from "../commands/OfficeStatisticsCommand";
import { RoomStatusCommand } from "../commands/RoomStatusCommand";
import { UserAuthenticationCommand } from "../commands/UserAuthenticationCommand";
export class CommandParser {
  static parse(command: string): string {
    const [action, ...args] = command.split(" ");
    switch (action) {
      case "Config":
        if (args[0] === "room" && args[1] === "count") {
          if (Number.isNaN(parseInt(args[2]))) {
            return "Invalid room count. Please enter a valid number.";
          }
          return new ConfigRoomCommand().execute(parseInt(args[2]));
        } else if (
          args[0] === "room" &&
          args[1] === "max" &&
          args[2] === "capacity"
        ) {
          if (Number.isNaN(parseInt(args[3]))) {
            return "Invalid room capacity. Please enter a valid number.";
          }
          return new ConfigRoomMaxCapacityCommand().execute(
            parseInt(args[3]),
            parseInt(args[4])
          );
        }
        break;
      case "Add":
        if (args[0] === "occupant") {
          if (Number.isNaN(parseInt(args[1]))) {
            return "Invalid room id. Please enter a valid number.";
          }
          if (Number.isNaN(parseInt(args[2]))) {
            return "Invalid occupant count. Please enter a valid number.";
          }
          return new AddOccupantCommand().execute(
            parseInt(args[1]),
            parseInt(args[2])
          );
        }
        break;
      case "Block":
        if (args[0] === "room") {
          if (Number.isNaN(parseInt(args[1]))) {
            return "Invalid room id. Please enter a valid number.";
          }
          if (!args[2]) {
            return "Invalid time. Please enter a valid time.";
          }
          return new BlockRoomCommand().execute(
            parseInt(args[1]),
            args[2],
            parseInt(args[3]) || 60
          );
        }
        break;
      case "Cancel":
        if (args[0] === "room") {
          if (Number.isNaN(parseInt(args[1]))) {
            return "Invalid room id. Please enter a valid number.";
          }
          return new CancelRoomCommand().execute(parseInt(args[1]), args[2]);
        }
        break;
      case "Status":
        if (args[0] === "room") {
          if (Number.isNaN(parseInt(args[1]))) {
            return "Invalid room id. Please enter a valid number.";
          }
          return new RoomStatusCommand().execute(parseInt(args[1]));
        }
        break;
      case "Statistics":
        return new OfficeStatisticsCommand().execute();
      case "Logout":
        return new UserAuthenticationCommand().execute();
      case "Me":
        return new UserAuthenticationCommand().me();
      default:
        return "Invalid command. Please enter a valid command.";
    }
    return "Invalid command format.";
  }
}
