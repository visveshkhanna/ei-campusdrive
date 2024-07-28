import { RoomObserver } from "./RoomObserver";
import { Room } from "../models/Room";
import { Logger } from "../utils/Logger";

export class LightController implements RoomObserver {
  public update(room: Room): void {
    if (room.occupied) {
      Logger.log(`Lights turned on for Room ${room.id}.`);
    } else {
      Logger.log(`Lights turned off for Room ${room.id}.`);
    }
  }
}
