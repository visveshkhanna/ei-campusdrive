export class Logger {
  static log(message: string) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }
}
