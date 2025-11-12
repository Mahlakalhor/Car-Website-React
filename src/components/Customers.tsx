import profile1 from "../assets/media/profile1.png";
import profile2 from "../assets/media/profile2.png";
import { CustomerCard } from "./CustomerCard";
import { motion } from "motion/react";

export const Customers = () => {
  const customers = [
    {
      name: "Emma Rodriguez",
      location: "Barcelona, Spain",
      img: profile1,
    },
    {
      name: "John Smith",
      location: "New York, USA",
      img: profile2,
    },
    {
      name: "Ava Johnson",
      location: "Sydney, Australia",
      img: profile2,
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-6 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex flex-col justify-center items-center text-center"
      >
        <h1 className="font-semibold text-3xl md:text-4xl">
          What Our Customers Say
        </h1>
        <p className="text-sm md:text-base text-[#6a7282] mt-2 max-w-xl">
          Discover why discerning travelers choose StayVenture for their luxury
          accommodations around the world.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
        {customers.map((c) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              type: "spring",
              stiffness: 50,
            }}
          >
            <CustomerCard {...c} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
