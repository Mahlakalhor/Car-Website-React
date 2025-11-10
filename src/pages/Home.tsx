import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Featured } from "../components/Featured";
export const Home = () => {
  return (
    <div className="flex flex-col ">
      <Header />
      <Hero />
      <Featured />
    </div>
  );
};
