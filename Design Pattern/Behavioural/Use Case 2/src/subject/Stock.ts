import { Subject } from "./Subject";
import { Observer } from "../observer/Observer";

export class Stock implements Subject {
  private observers: Observer[] = [];
  private price: number = 0;

  public attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      console.log("The observer is already attached to the subject.");
      return;
    }
    this.observers.push(observer);
  }

  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    // given that if the observer is not attached to the subject, the index will be -1
    if (observerIndex === -1) {
      console.log("Observer not found.");
      return;
    }
    this.observers.splice(observerIndex, 1);
  }

  public notify(): void {
    // notify all observers
    for (const observer of this.observers) {
      observer.update(this.price);
    }
  }

  public setPrice(price: number): void {
    this.price = price;
    this.notify();
  }
}
