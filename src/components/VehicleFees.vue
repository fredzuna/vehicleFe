<template>
  <div>
    <h3>Vehicle Fees</h3>
    <ul v-if="fees">
      <li>Basic: {{ formatCurrency(fees.basic) }}</li>
      <li>Special: {{ formatCurrency(fees.special) }}</li>
      <li>Association: {{ formatCurrency(fees.association) }}</li>
      <li>Storage: {{ formatCurrency(fees.storage) }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IVehicleCharges } from '../interfaces/IVehicleCharges';
import { formatCurrency } from '../util';

export default defineComponent({
  props: {
    fees: {
      type: Object as PropType<IVehicleCharges | null>,
      required: true,
    },
  },
  methods: {
    formatCurrency(amount: number): string {
      return formatCurrency(amount);
    },
  },
});
</script>

<style scoped>
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 5px;
  }
</style>
