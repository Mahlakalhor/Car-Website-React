import { useState } from "react";
import logo from "../assets/media/logo.svg";
import menuSvg from "../assets/media/menu.svg";
import crossSvg from "../assets/media/cross.svg";
import clsx from "clsx";
import { motion } from "motion/react";
import { Module } from "./Module";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full h-[65px] bg-[#F1F5F9] flex justify-between items-center px-6 border-b border-b-[#c4c7d2]"
    >
      <img src={logo} alt="logo" />
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <img
          src={open ? crossSvg : menuSvg}
          alt={open ? "close menu" : "open menu"}
        />
      </button>

      <div
        className={clsx(
          "fixed top-16.5 w-full h-full p-4 bg-[#F1F5F9] transition-all duration-300 ",
          {
            "-right-full": !open,
            "right-0": open,
          }
        )}
      >
        <ul className="flex flex-col gap-4 *:text-[16px] text-gray-600 text-start ">
          <li>Home</li>
          <li>Cars</li>
          <li>My Bookings</li>
          <li>List Cars</li>
        </ul>
        <button
          onClick={() => setShowLogin(true)}
          className="mt-4 px-4 py-2 bg-[#2563eb] text-white rounded-lg cursor-pointer w-[104px] text-center "
        >
          Login
        </button>
      </div>
      {showLogin && <Module />}
    </motion.header>
  );
};
