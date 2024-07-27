import CalendarService from "./CalendarService";

const calendarService = CalendarService.getInstance();

// Placeholder events
const event1 = {
  id: "1",
  title: "Math Class",
  start: new Date("2024-07-28T10:00:00+05:30"),
  end: new Date("2024-07-28T11:00:00+05:30"),
  recurring: true,
  recurrencePattern: "weekly",
  notification: true,
};

const event2 = {
  id: "2",
  title: "Science Workshop",
  start: new Date("2024-07-28T12:00:00+05:30"),
  end: new Date("2024-07-28T13:30:00+05:30"),
  notification: true,
};

// Add events
calendarService.addEvent(event1);
calendarService.addEvent(event2);

// Get Specific Event
console.log(calendarService.getEvent("1"));

// Remove specific event
calendarService.removeEvent("2");

// Retrieving all events
console.log(calendarService.getAllEvents());

// Check conflict
const event3 = {
  id: "3",
  title: "Art Class",
  start: new Date("2024-07-28T10:30:00+05:30"),
  end: new Date("2024-07-28T11:30:00+05:30"),
};

try {
  calendarService.addEvent(event3);
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  }
}
