<script lang="ts">
  import type { CounterViewModel } from "./CounterPresenter";
  import { presenter, service } from '../../configuration';
  import { onMount, onDestroy } from 'svelte';

  let count = $state({counterValue: 0} satisfies CounterViewModel);
  const dispatch = (newValue) => count = newValue;
  const addToCounter = () => service.updateCounter(1);

  onMount(() => {
    presenter.addCallback(dispatch);
    service.getCounterValue();
  });

  onDestroy(() => {
    presenter.removeCallback(dispatch);
  })

</script>

<div class="svelte-counter">
  <div>{ count.counterValue }</div>
  <button onclick={addToCounter}>click</button>
</div>

<style scoped>
.svelte-counter {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
</style>

