import { randomUUID } from "crypto";

export class Booking {
  public id: string;
  public start: Date;
  public end: Date;
  constructor(start: Date, end: Date) {
    this.id = randomUUID();
    this.start = start;
    this.end = end;
  }
}
