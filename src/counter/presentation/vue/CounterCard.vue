<script setup>
  import { ref, onMounted, onBeforeUnmount } from "vue";
  import { presenter, service } from '../../configuration';

  const count = ref({counterValue: 0});
  const dispatch = (newValue) => count.value = newValue;
  const addToCounter = () => service.updateCounter(1);

  onMounted(() => {
    presenter.addCallback(dispatch);
    service.getCounterValue();
  });

  onBeforeUnmount(() => {
    presenter.removeCallback(dispatch);
  })
</script>

<template>
  <div class="vue-counter">
    <div>{{ count.counterValue }}</div>
    <button @click="addToCounter">click</button>
  </div>
</template>

<style scoped>
.vue-counter {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
</style>

