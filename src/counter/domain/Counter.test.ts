import { test, expect } from "vitest";
import { Counter } from "./Counter";


test('Can get value of a Counter', () => {
  const counter = new Counter(5);
  expect(counter.value()).toBe(5);
})

test('Can add value to a Counter', () => {
  const counter = new Counter(0);
  expect(counter.value()).toBe(0);
  counter.add(1);
  expect(counter.value()).toBe(1);
  counter.add(1);
  expect(counter.value()).toBe(2);
})
