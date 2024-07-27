import { Transaction } from "../models/Transaction";

class TransactionLogger {
  private transactionHistory: Transaction[] = [];

  public logTransaction(transaction: Transaction): void {
    this.transactionHistory.push(transaction);
    console.log("Logged transaction:", transaction);
  }

  public getTransactionHistory(): Transaction[] {
    return this.transactionHistory;
  }
}

export default TransactionLogger;
