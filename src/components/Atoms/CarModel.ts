import axios from "axios";

// Define the type for the car object
export interface Car {
  id: number,
  _id: string;
  brand: string;
  model: string;
  seats: number;
  category: string;
  horsepower: number;
  seatsCount: number;
  fuelType: string;
  price: number;
  link: string;
}

export async function fetchCars(): Promise<Car[]> {
  const url = 'https://eu-central-1.aws.data.mongodb-api.com/app/car-brmdzib/endpoint/cars';

  try {
    const response = await axios.post(url);
    // Transform the received data into car objects
    const cars: Car[] = response.data.map((car: any) => ({
      id: car.id,
      _id: car._id,
      brand: car.brand,
      model: car.model,
      seats: car.seats,
      category: car.category,
      horsepower: car.horsepower,
      seatsCount: car.seatsCount,
      fuelType: car.fuelType,
      price: car.price,
      link: car.link
    }));
    console.log(cars)
    return cars;
  } catch (error) {
    console.error("Error fetching cars:", error);
    return [];
  }
}
