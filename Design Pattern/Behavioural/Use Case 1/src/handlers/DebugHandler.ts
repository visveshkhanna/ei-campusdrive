import { BaseHandler, LogRequest } from "./BaseHandler";

export class DebugHandler extends BaseHandler {
  public handle(request: LogRequest): void {
    if (request.level === "DEBUG") {
      console.log(`[DEBUG]: ${request.message}`);
      return;
    }
    super.handle(request);
  }
}
