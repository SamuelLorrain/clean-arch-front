import {html, css, LitElement} from "lit";
import {customElement} from "lit/decorators.js";

import './CounterCard.ts';

@customElement("lit-app")
export class LitApp extends LitElement {

  static styles = css`
    div {
      padding: 1rem;
      border: 1px solid black;
    }
  `;

  render() {
    return html`<div>
      <h1>Lit</h1>
      <counter-card></counter-card>
      <counter-card></counter-card>
    </div>`;
  }
}
