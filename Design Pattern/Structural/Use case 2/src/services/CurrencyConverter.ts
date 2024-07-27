class CurrencyConverter {
  private exchangeRates: { [key: string]: number } = {
    USD: 1,
    INR: 83,
    EUR: 0.85,
    GBP: 0.75,
  };

  public convert(
    amount: number,
    fromCurrency: string,
    toCurrency: string
  ): number {
    const fromRate = this.exchangeRates[fromCurrency];
    const toRate = this.exchangeRates[toCurrency];
    if (fromRate === undefined || toRate === undefined) {
      throw new Error("Unsupported currency");
    }
    return (amount / fromRate) * toRate;
  }
}

export default CurrencyConverter;
