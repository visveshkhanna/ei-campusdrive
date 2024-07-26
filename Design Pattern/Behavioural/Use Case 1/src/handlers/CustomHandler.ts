import { BaseHandler, LogRequest } from "./BaseHandler";

export class CustomHandler extends BaseHandler {
  public handle(request: LogRequest): void {
    console.log(`[${request.level}]: ${request.message}`);
  }
}
