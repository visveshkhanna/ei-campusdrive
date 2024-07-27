class Square {
  public processTransaction(amount: number, currency: string): void {
    console.log(`Processing Square payment of ${amount} ${currency}`);
  }
}

export default Square;
