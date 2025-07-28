import type { Counter } from "./Counter";


export interface CounterRepository {
  getCounter: () => Counter;
  updateCounterValue: (value: number) => void;
}

