import { BaseHandler, LogRequest } from "./BaseHandler";

export class InfoHandler extends BaseHandler {
  public handle(request: LogRequest): void {
    if (request.level === "INFO") {
      console.log(`[INFO]: ${request.message}`);
      return;
    }
    super.handle(request);
  }
}
