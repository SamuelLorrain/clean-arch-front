import type { CounterRepository } from "../domain/CounterRepository";
import type { CounterPresenter } from "../presentation/CounterPresenter";

export class CounterService {
  private repo: CounterRepository;
  private presenter: CounterPresenter;

  constructor(repo: CounterRepository, presenter: CounterPresenter) {
    this.repo = repo;
    this.presenter = presenter;
  }

  getCounterValue() {
    this.presenter.present(this.repo.getCounter().value())
  }

  updateCounter(value: number) {
    this.repo.updateCounterValue(value);
    this.presenter.present(this.repo.getCounter().value());
  }
}
