import { BaseHandler, LogRequest } from "./BaseHandler";

export class ErrorHandler extends BaseHandler {
  public handle(request: LogRequest): void {
    if (request.level === "ERROR") {
      console.log(`[ERROR]: ${request.message}`);
      return;
    }
    super.handle(request);
  }
}
