<template>
  <div class="vehicle-cost-form">
    <form>
      <div class="form-group">
        <label for="price">Vehicle Base Price:</label>
        <input
          type="number"
          v-model.number="basePrice"
          id="price"
          placeholder="Enter base price"
        />
      </div>
      <div class="form-group">
        <label for="type">Vehicle Type:</label>
        <select v-model="vehicleType" id="type">
          <option :value="VehicleTypeEnum.Common">{{ VehicleTypeEnum[VehicleTypeEnum.Common] }}</option>
          <option :value="VehicleTypeEnum.Luxury">{{ VehicleTypeEnum[VehicleTypeEnum.Luxury] }}</option>
        </select>
      </div>
      <VehicleFees :fees="fees" />
      <div class="total-cost">
        <h3>Total Cost: {{ formatCurrency(totalCost) }}</h3>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VehicleTypeEnum } from '../enums/VehicleTypeEnum';
import { IVehicleCharges } from '../interfaces/IVehicleCharges';
import VehicleFees from './VehicleFees.vue';
import { formatCurrency } from '../util';
import { calculateVehiclePrice } from '../services/apiService';

export default defineComponent({
  components: {
    VehicleFees,
  },
  data() {
    return {
      basePrice: 0 as number,
      vehicleType: VehicleTypeEnum.Common as VehicleTypeEnum,      
      totalCost: 0 as number,
      VehicleTypeEnum,
      fees: null as IVehicleCharges | null
    };
  },
  watch: {
    basePrice: 'calculatePrice',
    vehicleType: 'calculatePrice',
  },
  methods: {
    async calculatePrice() {
      try {
        const result = await calculateVehiclePrice(this.basePrice, this.vehicleType);
        this.totalCost = result.totalPrice;
        this.fees = result.vehicleCharges;
      } catch (error) {
        console.error('Failed to calculate price:', error);
      }
    },
    formatCurrency(amount: number): string {
      return formatCurrency(amount); // Use the utility function
    },
  }
});
</script>

<style scoped>
.vehicle-cost-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
select {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

ul {
  list-style: none;
  padding: 0;
}

.total-cost {
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
}
</style>
