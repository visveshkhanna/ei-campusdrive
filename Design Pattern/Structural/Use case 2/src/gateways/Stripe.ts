class Stripe {
  public pay(amount: number, currency: string): void {
    console.log(`Processing Stripe payment of ${amount} ${currency}`);
  }
}

export default Stripe;
