import type { CounterPresenter, CounterViewModel } from "./CounterPresenter";

export class CounterPresenterImpl implements CounterPresenter {
  private callback: Set<(viewModel: CounterViewModel) => void>;

  constructor() {
    this.callback = new Set();
  }

  addCallback(callback: (viewModel: CounterViewModel) => void) {
    this.callback.add(callback);
  }

  removeCallback(callback: (viewModel: CounterViewModel) => void) {
    this.callback.delete(callback);
  }

  present(counterValue: number) {
    for (const call of this.callback) {
        call({ counterValue });
    }
  }
}
