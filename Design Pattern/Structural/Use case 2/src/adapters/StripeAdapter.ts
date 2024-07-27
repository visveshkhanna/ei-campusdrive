import { PaymentProcessor } from "../models/PaymentProcessor";
import Stripe from "../gateways/Stripe";
import TransactionLogger from "../services/TransactionLogger";
import { v4 as uuidv4 } from "uuid";

export class StripeAdapter implements PaymentProcessor {
  private stripe: Stripe;
  private transactionLogger: TransactionLogger;

  constructor(stripe: Stripe, transactionLogger: TransactionLogger) {
    this.stripe = stripe;
    this.transactionLogger = transactionLogger;
  }

  processPayment(amount: number, currency: string): void {
    try {
      this.stripe.pay(amount, currency);
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
