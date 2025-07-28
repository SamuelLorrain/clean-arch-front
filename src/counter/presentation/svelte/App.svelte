<script lang="ts">
  import CounterCard from "./CounterCard.svelte";

  let test = "test";
</script>

<div class="svelte-component">
  <h1>Svelte</h1>
  <div class="counter-list">
    <CounterCard/>
    <CounterCard/>
  </div>
</div>

<style>
.svelte-component {
  padding: 1rem;
  border: 1px solid black;
}
</style>
