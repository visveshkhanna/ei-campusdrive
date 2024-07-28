import { Logger } from "../utils/Logger";

export class Email {
  constructor() {}
  public static send(to: string, subject: string, body: string): void {
    Logger.log(
      `Sending email to ${to} with subject ${subject} and body ${body}`
    );
    console.log(`Email sent!`);
  }
}
