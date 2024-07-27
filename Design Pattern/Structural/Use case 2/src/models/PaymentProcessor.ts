export interface PaymentProcessor {
  processPayment(amount: number, currency: string): void;
}
