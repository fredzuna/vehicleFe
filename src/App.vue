<script setup lang="ts">
import VehiclePricing from './components/VehiclePricing.vue'
</script>

<template>
  <div>
    <h1>Vehicle preci calculator</h1>
  </div>
  <VehiclePricing />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
