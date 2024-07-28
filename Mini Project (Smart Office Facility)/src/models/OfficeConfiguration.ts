import { Room } from "./Room";
import { RoomObserver } from "../observers/RoomObserver";

export class OfficeConfiguration {
  private static instance: OfficeConfiguration;
  private rooms: Map<number, Room>;
  private observers: RoomObserver[];
  private statistics: string[];

  private constructor() {
    this.rooms = new Map<number, Room>();
    this.observers = [];
    this.statistics = [];
  }

  public static getInstance(): OfficeConfiguration {
    if (!OfficeConfiguration.instance) {
      OfficeConfiguration.instance = new OfficeConfiguration();
    }
    return OfficeConfiguration.instance;
  }

  public configureRooms(count: number): string {
    if (this.rooms.size > 0) {
      // ...office already configured, check for conflicts
      for (const room of this.rooms.values()) {
        const bookings = room.booking;
        if (bookings.length > 0) {
          return `Cannot configure office with ${count} rooms. Room ${room.id} has ${bookings.length} bookings.`;
        }
      }
      this.updateStatistics(`Office reconfigured with ${count} meeting rooms`);
    }
    for (let i = 1; i <= count; i++) {
      this.rooms.set(i, new Room(i));
    }
    this.updateStatistics(`Office configured with ${count} meeting rooms`);
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
    const currentTime = new Date();
    for (const booking of room.booking) {
      if (booking.start < currentTime && booking.end > currentTime) {
        return `Room ${roomId} is currently occupied. Cannot set capacity.`;
      }
    }
    if (capacity <= 0) {
      return "Invalid capacity. Please enter a valid positive number.";
    }
    room.maxCapacity = capacity;
    this.updateStatistics(
      `Room ${roomId} maximum capacity set to ${capacity}.`
    );
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

  public getStatistics(): string {
    return this.statistics.join("\n");
  }

  public updateStatistics(log: string): void {
    this.statistics.push(log);
  }
}
