
export type CounterViewModel = {
  counterValue: number;
}

export interface CounterPresenter {
  present: (counterValue: number) => void;
}
