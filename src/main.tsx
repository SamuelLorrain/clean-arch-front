// React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactApp from './counter/presentation/react/App'

createRoot(document.getElementById('react')!).render(
  <StrictMode>
    <ReactApp />
  </StrictMode>,
)

// Vue
import { createApp } from 'vue'
import VueApp from "./counter/presentation/vue/App.vue";

createApp(VueApp).mount("#vue");

// Svelte
import { mount } from "svelte";
import SvelteApp from "./counter/presentation/svelte/App.svelte";

mount(SvelteApp, {
  target: document.querySelector("#svelte")!,
})

// Lit
import "./counter/presentation/lit/App.ts";

