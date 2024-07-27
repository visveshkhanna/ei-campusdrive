import { PaymentProcessor } from "../models/PaymentProcessor";
import Paypal from "../gateways/Paypal";
import TransactionLogger from "../services/TransactionLogger";
import { v4 as uuidv4 } from "uuid";

export class PayPalAdapter implements PaymentProcessor {
  private payPal: Paypal;
  private transactionLogger: TransactionLogger;

  constructor(payPal: Paypal, transactionLogger: TransactionLogger) {
    this.payPal = payPal;
    this.transactionLogger = transactionLogger;
  }

  processPayment(amount: number, currency: string): void {
    try {
      this.payPal.makePayment(amount, currency);
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
