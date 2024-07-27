import { PaymentProcessor } from "./models/PaymentProcessor";
import { PayPalAdapter } from "./adapters/PaypalAdapter";
import { StripeAdapter } from "./adapters/StripeAdapter";
import { SquareAdapter } from "./adapters/SquareAdapter";
import PayPal from "./gateways/Paypal";
import Stripe from "./gateways/Stripe";
import Square from "./gateways/Square";
import TransactionLogger from "./services/TransactionLogger";
import CurrencyConverter from "./services/CurrencyConverter";

const transactionLogger = new TransactionLogger();
const currencyConverter = new CurrencyConverter();

const payPalProcessor: PaymentProcessor = new PayPalAdapter(
  new PayPal(),
  transactionLogger
);
const stripeProcessor: PaymentProcessor = new StripeAdapter(
  new Stripe(),
  transactionLogger
);
const squareProcessor: PaymentProcessor = new SquareAdapter(
  new Square(),
  transactionLogger
);

const amount = 100;

try {
  const convertedAmount = currencyConverter.convert(amount, "USD", "INR");
  payPalProcessor.processPayment(convertedAmount, "INR");
  stripeProcessor.processPayment(convertedAmount, "INR");
  squareProcessor.processPayment(convertedAmount, "INR");
} catch (error) {
  console.error("Currency conversion failed:", error);
}

console.log("Transaction History:", transactionLogger.getTransactionHistory());
