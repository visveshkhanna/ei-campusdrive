# Payment Gateway Adapter

## Problem Statement

Create a payment gateway adapter that can process payments using different payment gateways. The Adapter pattern can be used to create a unified interface for processing payments.

## Solution

The solution is implemented using the Adapter pattern. The `PaymentProcessor` interface defines a method `processPayment()` that takes in an amount and a currency as parameters and returns nothing. The `PayPalAdapter`, `StripeAdapter`, and `SquareAdapter` classes implement this interface and provide the actual implementation for processing payments using PayPal, Stripe, and Square respectively.

## Usage

To use the `PaymentProcessor` interface, create a new instance of the class that implements the interface and pass in an instance of the payment gateway and a `TransactionLogger` instance. The `PaymentProcessor` interface will then call the appropriate payment gateway method to process the payment.