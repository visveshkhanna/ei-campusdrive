import { Booking } from "./Booking";

export class Room {
  id: number;
  maxCapacity: number;
  occupants: number;
  occupied: boolean;
  booking: Booking[];

  constructor(id: number) {
    this.id = id;
    this.maxCapacity = 0;
    this.occupants = 0;
    this.occupied = false;
    this.booking = [];
  }

  public addOccupants(count: number): string {
    if (count > this.maxCapacity) {
      return `Room ${this.id} cannot accommodate ${count} occupants.`;
    }
    if (count === 0) {
      this.occupants = count;
      this.occupied = false;
      return `Room ${this.id} is now unoccupied. AC and lights turned off.`;
    }
    this.occupants = count;
    this.occupied = this.occupants > 0;
    return `Room ${this.id} is now occupied by ${this.occupants} ${
      count > 1 ? "persons" : "person"
    }. AC and lights turned on.`;
  }
}
