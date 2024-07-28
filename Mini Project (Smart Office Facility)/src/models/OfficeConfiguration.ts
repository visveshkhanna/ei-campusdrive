import { Room } from "./Room";
import { RoomObserver } from "../observers/RoomObserver";

export class OfficeConfiguration {
  private static instance: OfficeConfiguration;
  private rooms: Map<number, Room>;
  private observers: RoomObserver[];

  private constructor() {
    this.rooms = new Map<number, Room>();
    this.observers = [];
  }

  public static getInstance(): OfficeConfiguration {
    if (!OfficeConfiguration.instance) {
      OfficeConfiguration.instance = new OfficeConfiguration();
    }
    return OfficeConfiguration.instance;
  }

  public configureRooms(count: number): string {
    for (let i = 1; i <= count; i++) {
      this.rooms.set(i, new Room(i));
    }
    return `Office configured with ${count} meeting rooms: ${Array.from(
      this.rooms.keys()
    )
      .map((key) => `Room ${key}`)
      .join(", ")}.`;
  }

  public setRoomMaxCapacity(roomId: number, capacity: number): string {
    const room = this.rooms.get(roomId);
    if (!room) {
      return `Room ${roomId} does not exist.`;
    }
    if (capacity <= 0) {
      return "Invalid capacity. Please enter a valid positive number.";
    }
    room.maxCapacity = capacity;
    return `Room ${roomId} maximum capacity set to ${capacity}.`;
  }

  public getRoom(roomId: number): Room | undefined {
    return this.rooms.get(roomId);
  }

  public addObserver(observer: RoomObserver) {
    this.observers.push(observer);
  }

  public notifyObservers(room: Room) {
    for (const observer of this.observers) {
      observer.update(room);
    }
  }
}
