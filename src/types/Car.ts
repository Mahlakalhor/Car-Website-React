export interface Car {
  _id: string;
  name: string;
  brand?: string;
  model?: string;
  pricePerDay: number;
  fuelType?: string;
  transmission?: string;
  seats?: number;
  location?: string;
  image: string;
  available?: boolean;
}