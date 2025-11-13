import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Featured } from "../components/Featured";
import { Banner } from "../components/Banner";
import { Customers } from "../components/Customers";
import { Email } from "../components/Getemail";
import { Footer } from "../components/Footer";
export const Home = () => {
  return (
    <div className="flex flex-col ">
      <Header />
      <Hero />
      <Featured limit={6} variant="home" showExploreButton={true} />
      <Banner />
      <Customers />
      <Email />
      <Footer />
    </div>
  );
};
