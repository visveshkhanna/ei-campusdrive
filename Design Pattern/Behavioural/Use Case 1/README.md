# Logging Framework

This is a logging framework that uses the Chain of Responsibility pattern can effectively manage different log levels and logging strategies.

## Use Case

The use case is to create a logging framework that allows developers to log messages at different levels of severity. The framework should provide a way to set the log level and log messages at different levels of severity.

## Implementation

This framework has three log levels: DEBUG, INFO, and ERROR. The log level is set using the setLogLevel method, and the log messages are logged using the log method. The log method takes a log level and a message as parameters, and calls the appropriate log method based on the log level.

The log methods are implemented using the Chain of Responsibility pattern. Each log method calls the next log method in the chain, which is determined by the log level. The log methods are implemented as classes that extend the BaseLogHandler class. The BaseLogHandler class has a setNextHandler method that allows the log methods to call the next log method in the chain.