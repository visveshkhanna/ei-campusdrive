import { DebugHandler } from "./handlers/DebugHandler";
import { ErrorHandler } from "./handlers/ErrorHandler";
import { InfoHandler } from "./handlers/InfoHandler";
import { LogRequest } from "./handlers/BaseHandler";
import { CustomHandler } from "./handlers/CustomHandler";

const debugHandler = new DebugHandler();
const infoHandler = new InfoHandler();
const errorHandler = new ErrorHandler();
const customHandler = new CustomHandler();

debugHandler.setNextHandler(infoHandler);
infoHandler.setNextHandler(errorHandler);
errorHandler.setNextHandler(customHandler);

const logger = debugHandler;

logger.handle(new LogRequest("DEBUG", "This is a debug message"));
logger.handle(new LogRequest("INFO", "This is an info message"));
logger.handle(new LogRequest("ERROR", "This is an error message"));
logger.handle(new LogRequest("CUSTOM", "This is a custom message"));
