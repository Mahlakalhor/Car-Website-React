import firstSvg from "../assets/media/first.svg";
import fuelSvg from "../assets/media/fuel.svg";
import carSvg from "../assets/media/car.svg";
import locationSvg from "../assets/media/location.svg";
import arrowSvg from "../assets/media/arrow.svg";
import { useEffect, useState } from "react";
import axiosInstance from "../api/axios";
import { motion } from "motion/react";

interface Car {
  _id: string;
  owner: string;
  brand: string;
  model: string;
  category: string;
  description: string;
  fuel_type: string;
  image: string;
  location: string;
  pricePerDay: number;
  seating_capacity: number;
  transmission: string;
  year: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export const Featured = () => {
  const [cars, setCars] = useState<Car[]>([]);
  useEffect(() => {
    axiosInstance
      .get<{ success: boolean; cars: Car[] }>("/user/cars")
      .then((res) => setCars(res.data.cars));
  }, []);
  return (
    <div className="flex flex-col  items-center py-24 px-6">
      <div className="flex flex-col justify-center items-center text-center ">
        <h1 className="text-4xl font-semibold  ">Featured Vehicles</h1>
        <p className="text-[#6a7282] text-sm mt-2 max-w-156s ">
          Explore our selection of premium vehicles available for your next
          adventure.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14, scale: 0.985 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 gap-8 mt-18 "
      >
        {cars.map((car) => (
          <motion.div
            key={car._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              type: "spring",
              stiffness: 50,
            }}
            className="group rounded-xl overflow-hidden shadow-lg transition-all cursor-pointer flex flex-col"
          >
            <div className="relative h-48 overflow-hidden ">
              <img
                alt={`${car.brand} ${car.model}`}
                src={car.image}
                className="w-full h-full object-cover  "
              />
              <span className="absolute top-4 left-4 bg-[#2563eb] rounded-full text-white text-xs px-2.5 py-1 ">
                Available Now
              </span>
              <div className="absolute bottom-4 right-4 bg-black px-3 py-2 rounded-lg flex items-center gap-1">
                <span className="font-semibold text-white">
                  ${car.pricePerDay}
                </span>
                <span className="text-sm text-[#fffc]">/ day</span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex flex-col justify-between items-start mb-2">
                <span className="text-lg font-medium">
                  {car.brand} {car.model}
                </span>
                <span className="text-sm">
                  {car.category} • {car.year}
                </span>
              </div>
              <div className="grid grid-cols-2 mt-4 gap-y-2">
                <div className="flex items-center text-sm ">
                  <img className="h-4 mr-2" alt="people_svg" src={firstSvg} />
                  <span className="text-gray-600">
                    {car.seating_capacity}Seats
                  </span>
                </div>
                <div className="flex items-center text-sm ">
                  <img className="h-4 mr-2" alt="people_svg" src={fuelSvg} />
                  <span className="text-gray-600">{car.fuel_type}</span>
                </div>
                <div className="flex items-center text-sm ">
                  <img className="h-4 mr-2" alt="people_svg" src={carSvg} />
                  <span className="text-gray-600">{car.transmission}</span>
                </div>
                <div className="flex items-center text-sm ">
                  <img
                    className="h-4 mr-2"
                    alt="people_svg"
                    src={locationSvg}
                  />
                  <span className="text-gray-600">{car.location}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          type: "spring",
          stiffness: 50,
        }}
        className="flex items-center justify-center gap-2 px-6 py-2 border border-[#c4c7d2] hover:bg-gray-50 rounded-md mt-18 cursor-pointer"
      >
        Explore all cars
        <img alt="arrow" src={arrowSvg} />
      </motion.button>
    </div>
  );
};
