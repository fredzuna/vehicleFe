import axios from 'axios';
import { IVehicleCost } from '../interfaces/IVehicleCost';
// const BASE_URL = import.meta.env.VITE_BASE_URL; // TODO: we should use env variable
const BASE_URL = 'http://localhost:5030/api'

const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  export async function calculateVehiclePrice(basePrice: number, type: number): Promise<IVehicleCost> {
    try {
      const response = await apiClient.post('/vehicle/calculate-price', {
        basePrice,
        type,
      });
      return response.data as IVehicleCost;
    } catch (error) {
      console.error('Error calculating vehicle price:', error);
      throw error;
    }
  }