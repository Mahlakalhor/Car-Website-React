import car from "../assets/media/car.png";
import { motion } from "motion/react";

export const Hero = () => {
  return (
    <div className="flex flex-col bg-[#F1F5F9] h-screen items-center justify-center gap-15 lg:gap-20 lg:justify-center lg:items-center">
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-[56px] lg:mt-4 
          font-semibold md:font-bold
          text-center
        "
      >
        Luxury Cars on Rent
      </motion.h1>
      <motion.form
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className=" bg-white 
          flex flex-col md:flex-row 
          items-start md:items-center 
          justify-between
          p-6
          rounded-lg md:rounded-full
          w-80 md:w-full md:max-w-[820px]
          shadow-[0px_8px_20px_rgba(0,0,0,0.1)]
          gap-8 md:gap-10
        "
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:ml-4">
          <div className="flex flex-col items-start gap-2">
            <select
              className="bg-transparent text-sm text-gray-700 outline-none cursor-pointer"
              required
            >
              <option value="">Pickup Location</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Houston">Houston</option>
              <option value="Chicago">Chicago</option>
            </select>
            <p className="px-1 text-sm text-gray-500">Please select location</p>
          </div>

          <div className="flex flex-col items-start gap-2">
            <label className="text-sm" htmlFor="pickup-date">
              Pick-up Date
            </label>
            <input
              id="pickup-date"
              type="date"
              required
              className="text-sm text-gray-500 border-none outline-none bg-transparent"
            />
          </div>

          <div className="flex flex-col items-start gap-2">
            <label className="text-sm" htmlFor="return-date">
              Return Date
            </label>
            <input
              id="return-date"
              type="date"
              required
              className="text-sm text-gray-500 border-none outline-none bg-transparent"
            />
          </div>
        </div>

        <button
          type="submit"
          className="
      flex items-center justify-center gap-1 
      px-9 py-3 
      bg-[#2563eb] hover:bg-[#1d4fcc] 
      text-white rounded-full cursor-pointer
      mt-2 md:mt-0
    "
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="brightness-300"
          >
            <path
              d="M10.8359 10.6152L14.9999 14.6949"
              stroke="#FFFFFF"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.14099 11.7381C11.8699 10.6019 13.142 7.51376 11.9822 4.84043C10.8224 2.1671 7.67004 0.920959 4.94113 2.0571C2.21222 3.19324 0.940171 6.28142 2.09993 8.95475C3.25969 11.6281 6.41208 12.8742 9.14099 11.7381Z"
              stroke="#FFFFFF"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Search
        </button>
      </motion.form>
      <motion.img
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        src={car}
        alt="car"
        className="
          w-full
          max-w-[390px]
          md:max-w-[600px]
          lg:max-w-[850px]
          xl:max-w-[900px]
          mx-auto
          h-auto"
      />
    </div>
  );
};
