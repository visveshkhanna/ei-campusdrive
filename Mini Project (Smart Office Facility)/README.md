# Office Management System

## Overview

This project is an Office Management System that allows users to manage room bookings, configure office settings, and monitor room statuses. The system uses several design patterns, including Singleton, Command, and Observer patterns, to ensure a scalable and maintainable architecture.

## Design Patterns

### Singleton Pattern

The Singleton pattern is used to ensure that certain classes have only one instance throughout the application. This is particularly useful for managing shared resources or configurations.

- **[`OfficeConfiguration`](src/models/OfficeConfiguration.ts)**: Manages office settings and configurations.
- **[`UserSession`](src/models/UserSession.ts)**: Manages user session information.

### Command Pattern

The Command pattern is used to encapsulate all the information needed to perform an action or trigger an event. This pattern is useful for implementing undo/redo functionality, logging changes, and more.

Available commands:
- **[`AddOccupantCommand`](src/commands/AddOccupantCommand.ts)**: Adds an occupant to a room.
- **[`BlockRoomCommand`](src/commands/BlockRoomCommand.ts)**: Blocks a room.
- **[`CancelRoomCommand`](src/commands/CancelRoomCommand.ts)**: Cancels a room booking.
- **[`ConfigRoomCommand`](src/commands/ConfigRoomCommand.ts)**: Configures room settings.
- **[`ConfigRoomMaxCapacityCommand`](src/commands/ConfigRoomMaxCapacityCommand.ts)**: Configures the maximum capacity of a room.
- **[`OfficeStatisticsCommand`](src/commands/OfficeStatisticsCommand.ts)**: Retrieves office statistics.
- **[`RoomStatusCommand`](src/commands/RoomStatusCommand.ts)**: Checks the status of a room.
- **[`UserAuthenticationCommand`](src/commands/UserAuthenticationCommand.ts)**: Authenticates a user.

### Observer Pattern

The Observer pattern is used to notify multiple objects about changes in the state of another object. This pattern is useful for implementing distributed event handling systems.

- **[`RoomObserver`](src/observers/RoomObserver.ts)**: Observes changes in room status and updates accordingly.
- **[`ACController`](src/observers/ACController.ts)**: Controls the air conditioning based on room status.
- **[`LightController`](src/observers/LightController.ts)**: Controls the lighting based on room status.

## Features

### User Authentication

User authentication is handled by the [`UserAuthenticationCommand`](src/commands/UserAuthenticationCommand.ts). This command verifies user credentials and manages user sessions.

### Email Notifications

Email notifications are sent using the [`Email`](src/models/Email.ts) class. Notifications are triggered for various events, such as booking cancellations due to inactivity.

### Automatic Cancellations

The system automatically cancels room bookings if the room is unoccupied for a specified period. This is handled by the [`Booking`](src/models/Booking.ts) class, which checks the room status and notifies users of cancellations.

### Command Parsing

Commands are parsed and executed using the [`CommandParser`](src/utils/CommandParser.ts) class. This class imports all available commands and provides a mechanism to execute them based on user input.

## Edge Cases

- **Concurrent Bookings**: The system handles concurrent booking requests by checking room availability before confirming a booking.
- **User Role Verification**: Only users with the appropriate roles can perform certain actions, such as configuring rooms or blocking them.
- **Notification Failures**: The system logs any failures in sending email notifications and retries if necessary.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/visveshkhanna/ei-campusdrive
    ```
2. Navigate to the project directory:
    ```sh
    cd 'Mini Project (Smart Office Facility)'
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

### Running the Application

To start the application, run:
```sh
npm start
```

Building the Application
To build the application, run:

```sh
npm run build
```

## Inputs

The application accepts the following inputs:

### Login

To login, enter the following command:

```sh
Login <username>
```

Replace `<username>` with the desired username.

### Logout

To logout, enter the following command:

```sh
Logout
```

### Me

To retrieve the current user's role, enter the following command:

```sh
Me
```

### Configure Rooms

To configure the number of rooms, enter the following command:

```sh
Config room count <count>
```

Replace `<count>` with the desired number of rooms.

### Configure Room Max Capacity

To configure the maximum capacity of a room, enter the following command:

```sh
Config room max capacity <room_id> <capacity>
```

Replace `<room_id>` with the desired room ID and `<capacity>` with the desired maximum capacity.

### Add Occupants

To add occupants to a room, enter the following command:

```sh
Add occupant <room_id> <count>
```

Replace `<room_id>` with the desired room ID and `<count>` with the desired number of occupants.

### Block Room

To block a room, enter the following command:

```sh
Block room <room_id> <time> <duration>
```

Replace `<room_id>` with the desired room ID, `<time>` with the desired start time in the format `HH:MM:SS` and `<duration>` with the desired duration in minutes.

### Cancel Room

To cancel a room booking, enter the following command:

```sh
Cancel room <room_id> <booking_id>
```

Replace `<room_id>` with the desired room ID and `<booking_id>` with the desired booking ID.

### Status Room

To check the status of a room, enter the following command:

```sh
Status room <room_id>
```

Replace `<room_id>` with the desired room ID.

### Statistics

To retrieve office statistics, enter the following command:

```sh
Statistics
```

## Outputs

The application provides the following outputs:

- Login: Displays a message indicating that the user has logged in successfully.
- Configure Rooms: Displays a message indicating that the number of rooms has been configured successfully.
- Configure Room Max Capacity: Displays a message indicating that the maximum capacity of a room has been configured successfully.
- Add Occupants: Displays a message indicating that the occupants have been added successfully.
- Block Room: Displays a message indicating that the room has been blocked successfully.
- Cancel Room: Displays a message indicating that the room booking has been cancelled successfully.
- Status Room: Displays the status of a room.
- Statistics: Displays the office statistics.

## Error Handling

The application handles the following errors:

- Invalid room count: Displays an error message indicating that the room count is invalid.
- Invalid room capacity: Displays an error message indicating that the room capacity is invalid.
- Invalid time: Displays an error message indicating that the time is invalid.
- Invalid duration: Displays an error message indicating that the duration is invalid.
- Invalid room id: Displays an error message indicating that the room ID is invalid.
- Invalid booking id: Displays an error message indicating that the booking ID is invalid.
- Invalid command: Displays an error message indicating that the command is invalid.
- Invalid command format: Displays an error message indicating that the command format is invalid.
- Invalid role: Displays an error message indicating that the role is invalid.
- Invalid username: Displays an error message indicating that the username is invalid.  

## Conclusion

This project demonstrates the implementation of a Smart Office Facility Management System using TypeScript and the design patterns. The system allows users to configure rooms, add occupants, block rooms, and cancel bookings. It also provides notifications for booking cancellations due to inactivity and automatically cancels bookings if the room is unoccupied for a specified period. The system handles concurrent booking requests and logs any failures in sending email notifications. The application is built using the TypeScript programming language and the design patterns, including the Singleton, Command, and Observer patterns.

