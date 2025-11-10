import car from "../assets/media/car.png";
import { motion } from "motion/react";

export const Hero = () => {
  return (
    <div className="flex flex-col bg-[#F1F5F9] h-screen items-center justify-center gap-15">
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="text-4xl font-semibold "
      >
        Luxury Cars on Rent
      </motion.h1>
      <motion.form
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="bg-white flex flex-col items-start  p-6 rounded-lg w-80 shadow-xl gap-8"
      >
        <div>
          <select className="flex flex-col ">
            <option>PickUp Location</option>
            <option>New York</option>
            <option>Los Angeles</option>
            <option>Houston</option>
            <option>Chicago</option>
          </select>
          <span className="text-[#6a7282] text-sm px-1 flex mt-3">
            Please select location
          </span>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <label htmlFor="pickup-date">Pick-Up date</label>
          <input
            className="text-[#6a7282] text-sm"
            type="date"
            id="pickup-date"
          />
        </div>
        <div className="flex flex-col gap-2 items-start">
          <label htmlFor="return-date">Return date</label>
          <input
            className="text-[#6a7282] text-sm"
            type="date"
            id="return-date"
          />
        </div>
        <div>
          <button className="bg-[#2563eb] rounded-full text-white px-9 py-3 flex items-center justify-center gap-1 -mt-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.626 10.6259L14.7088 14.7092"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.96293 11.7488C11.6387 10.6116 12.886 7.52063 11.7488 4.84487C10.6116 2.16912 7.52063 0.921849 4.84488 2.05902C2.16913 3.19619 0.921857 6.28717 2.05902 8.96292C3.19619 11.6387 6.28718 12.8859 8.96293 11.7488Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            search
          </button>
        </div>
      </motion.form>
      <motion.img
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        src={car}
        alt="car"
        className="w-[390px]"
      />
    </div>
  );
};
