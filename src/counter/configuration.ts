import { CounterService } from "./application/CounterService";
import { LocalStorageCounterRepository } from "./infrastructure/LocalStorageCounterRepository";
import { CounterPresenterImpl } from "./presentation/CounterPresenterImpl";

export const repo = new LocalStorageCounterRepository();
export const presenter = new CounterPresenterImpl();
export const service = new CounterService(repo, presenter);
