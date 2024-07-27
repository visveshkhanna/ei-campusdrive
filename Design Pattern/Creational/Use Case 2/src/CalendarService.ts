import { time } from "console";

type EventType = {
  id: string;
  title: string;
  start: Date;
  end: Date;
  recurring?: boolean;
  recurrencePattern?: string;
  notification?: boolean;
};

class CalendarService {
  private static instance: CalendarService;
  private events: Map<string, EventType>;

  private constructor() {
    this.events = new Map();
  }

  public static getInstance(): CalendarService {
    if (!CalendarService.instance) {
      CalendarService.instance = new CalendarService();
    }
    return CalendarService.instance;
  }

  public addEvent(event: EventType): void {
    if (this.checkConflict(event)) {
      throw new Error("Event conflicts with an existing event");
    }
    this.events.set(event.id, event);
    if (event.notification) {
      this.scheduleNotification(event);
    }
  }

  public getEvent(eventId: string): EventType | undefined {
    return this.events.get(eventId);
  }

  public removeEvent(eventId: string): void {
    this.events.delete(eventId);
  }

  public getAllEvents(): Map<string, EventType> {
    return this.events;
  }

  public checkConflict(newEvent: EventType): boolean {
    for (let event of this.events.values()) {
      if (event.start < newEvent.end && newEvent.start < event.end) {
        return true;
      }
    }
    return false;
  }

  public notify(event: EventType): void {
    console.log(`[Notification]: Event ${event.title} has started`);
  }

  public scheduleNotification(event: EventType): void {
    const now = new Date();
    const timeToEvent = event.start.getTime() - now.getTime();
    if (timeToEvent < 0) {
      setTimeout(() => {
        this.notify(event);
      }, timeToEvent / 1000);
    }
  }
}

export default CalendarService;
