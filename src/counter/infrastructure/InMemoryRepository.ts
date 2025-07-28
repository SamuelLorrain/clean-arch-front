import { Counter } from "../domain/Counter";
import type { CounterRepository } from "../domain/CounterRepository";


export class InMemoryCounterRepository implements CounterRepository {
  private counter: Counter

  constructor() {
    this.counter = new Counter();
  }

  getCounter() {
    return this.counter;
  }

  updateCounterValue(value: number) {
    this.counter.add(value);
  }
}

