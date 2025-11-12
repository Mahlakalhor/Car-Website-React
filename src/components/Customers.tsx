import profile1 from "../assets/media/profile1.png";
import profile2 from "../assets/media/profile2.png";
import { CustomerCard } from "./CustomerCard";

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
    <div className="py-28 px-6 ">
      <div className="flex flex-col justify-center items-center text-center ">
        <h1 className="font-semibold text-4xl ">What Our Customers Say</h1>
        <p className="text-sm text-[#6a7282] mt-2 max-w-156  ">
          Discover why discerning travelers choose StayVenture for their luxury
          accommodations around the world.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 mt-18 ">
        {customers.map((c) => (
          <CustomerCard key={c.name} {...c} />
        ))}
      </div>
    </div>
  );
};
