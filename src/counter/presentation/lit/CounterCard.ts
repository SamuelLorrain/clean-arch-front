import {html, css, LitElement} from "lit";
import {customElement, property} from "lit/decorators.js";
import { presenter, service } from '../../configuration';
import type { CounterViewModel } from "../CounterPresenter";

@customElement("counter-card")
export class CounterCard extends LitElement {
  static styles = css`
    .counter-card {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
    }
  `;

  constructor() {
    super()
    this.dispatchCounter = this.dispatchCounter.bind(this);
  }

  @property()
  counter: CounterViewModel = {counterValue: 0};

  addToCounter() {
    service.updateCounter(1);
  }

  dispatchCounter(newValue: CounterViewModel) {
    this.counter = newValue;
  }

  connectedCallback() {
    super.connectedCallback();
    presenter.addCallback(this.dispatchCounter);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    presenter.removeCallback(this.dispatchCounter);
  }

  render() {
    return html`<div class="counter-card">
      <div>${this.counter.counterValue}</div>
      <button @click=${this.addToCounter}>click</button>
    </div>`;
  }
}
