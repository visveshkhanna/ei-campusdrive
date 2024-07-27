import { PaymentProcessor } from "../models/PaymentProcessor";
import Square from "../gateways/Square";
import TransactionLogger from "../services/TransactionLogger";
import { v4 as uuidv4 } from "uuid";

export class SquareAdapter implements PaymentProcessor {
  private square: Square;
  private transactionLogger: TransactionLogger;

  constructor(square: Square, transactionLogger: TransactionLogger) {
    this.square = square;
    this.transactionLogger = transactionLogger;
  }

  processPayment(amount: number, currency: string): void {
    try {
      this.square.processTransaction(amount, currency);
      const transaction = {
        id: uuidv4(),
        amount,
        currency,
        status: "success",
        date: new Date(),
      };
      this.transactionLogger.logTransaction(transaction);
    } catch (error) {
      const transaction = {
        id: uuidv4(),
        amount,
        currency,
        status: "failure",
        date: new Date(),
      };
      this.transactionLogger.logTransaction(transaction);
      console.error("Payment processing failed:", error);
    }
  }
}
