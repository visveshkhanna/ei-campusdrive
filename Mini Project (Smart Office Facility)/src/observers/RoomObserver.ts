import { Room } from "../models/Room";

export interface RoomObserver {
  update(room: Room): void;
}
