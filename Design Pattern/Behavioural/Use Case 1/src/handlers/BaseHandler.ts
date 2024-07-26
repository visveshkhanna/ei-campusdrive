export interface LogHandler {
  setNextHandler(handler: LogHandler): LogHandler;
  handle(request: LogRequest): void;
}

export class LogRequest {
  constructor(public level: string, public message: string) {}
}

export abstract class BaseHandler implements LogHandler {
  private nextHandler: LogHandler | null = null;

  public setNextHandler(handler: LogHandler): LogHandler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: LogRequest): void {
    if (this.nextHandler) {
      this.nextHandler.handle(request);
    }
  }
}
