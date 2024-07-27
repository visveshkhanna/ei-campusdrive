class Paypal {
  public makePayment(amount: number, currency: string): void {
    console.log(`Processing PayPal payment of ${amount} ${currency}`);
  }
}

export default Paypal;
