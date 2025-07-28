import { Counter } from "../domain/Counter";
import type { CounterRepository } from "../domain/CounterRepository";

export class LocalStorageCounterRepository implements CounterRepository {
  private counter: Counter

  constructor() {
    const counter = localStorage.getItem("counter")
    if (counter == null) {
      this.counter = new Counter();
    } else {
      this.counter = new Counter(JSON.parse(counter).value);
    }
  }

  getCounter() {
    return this.counter;
  }

  updateCounterValue(value: number) {
    this.counter.add(value);
    this.save()
  }

  save() {
    localStorage.setItem("counter", JSON.stringify({value: this.counter.value()}))
  }
}
