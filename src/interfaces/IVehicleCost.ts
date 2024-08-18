import { IVehicleCharges } from "./IVehicleCharges";

export interface IVehicleCost {
    totalPrice: number;
    vehicleCharges: IVehicleCharges;
  }