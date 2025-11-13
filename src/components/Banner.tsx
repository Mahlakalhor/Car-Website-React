import car from "../assets/media/banner_car_image.png";
import { motion } from "motion/react";

export const Banner = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-6xl mx-auto px-4 md:px-6 mt-10"
    >
      <div
        className="
          flex flex-col md:flex-row items-center justify-between
          bg-linear-to-r from-[#0558FE] to-[#A9CFFF]
          rounded-2xl overflow-hidden
          px-6 md:px-10 py-8 md:py-10
        "
      >
        <div className="text-white max-w-md">
          <h1 className="text-2xl md:text-3xl font-medium">
            Do You Own a Luxury Car?
          </h1>
          <p className="mt-2 text-sm md:text-base">
            Monetize your vehicle effortlessly by listing it on CarRental.
          </p>
          <p className="mt-2 text-sm md:text-base max-w-130">
            We take care of insurance, driver verification and secure payments —
            so you can earn passive income, stress-free.
          </p>
          <button className="px-6 py-2 bg-white hover:scale-105 transition-transform text-[#2563eb] rounded-lg text-sm mt-4 cursor-pointer">
            List your car
          </button>
        </div>

        <motion.img
          src={car}
          alt="car_image"
          className="mt-6 md:mt-0 w-full max-w-sm md:max-w-md object-contain"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.section>
  );
};
