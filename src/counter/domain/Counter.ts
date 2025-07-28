export class Counter {
  private _value: number;

  constructor(value: number = 0) {
    this._value = value;
  }

  value(): number {
    return this._value;
  }

  add(value: number) {
    this._value += value;
  }
}

