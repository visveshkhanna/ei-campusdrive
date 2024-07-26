import { Observer } from "./Observer";

export class Investor implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public update(price: number): void {
    console.log(`${this.name} received a price update: ${price}`);
  }
}
