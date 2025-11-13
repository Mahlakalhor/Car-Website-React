import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Featured } from "../components/Featured";
import { AvailableCars } from "../components/AvailableCars";

export const Cars = () => {
  return (
    <div className="flex flex-col ">
      <Header variant="cars" />
      <AvailableCars/>
      <Featured />
      <Footer />
    </div>
  );
};