import { RoomObserver } from "./RoomObserver";
import { Room } from "../models/Room";
import { Logger } from "../utils/Logger";

export class ACController implements RoomObserver {
  public update(room: Room): void {
    if (room.occupied) {
      Logger.log(`AC turned on for Room ${room.id}.`);
    } else {
      Logger.log(`AC turned off for Room ${room.id}.`);
    }
  }
}
