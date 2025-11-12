import car from "../assets/media/banner_car_image.png";

export const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-between px-8 pt-10 bg-linear-to-r from-[#0558FE] to-[#A9CFFF] max-w-6xl  rounded-2xl overflow-hidden mx-3 ">
      <div className="text-white">
        <h1 className="text-3xl font-medium">Do You Own a Luxury Car?</h1>
        <p className="mt-2 ">
          Monetize your vehicle effortlessly by listing it on CarRental.
        </p>
        <p className="max-w-130">
          We take care of insurance, driver verification and secure payments —
          so you can earn passive income, stress-free.
        </p>
        <button className="px-6 py-2 bg-white hover:scale-105 transition-transform text-[#2563eb] rounded-lg text-sm mt-4 cursor-pointer  ">
          List your car
        </button>
        <img className="mt-10 max-h-45" src={car} alt="car_image" />
      </div>
    </div>
  );
};
