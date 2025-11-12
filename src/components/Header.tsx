import { useState, useEffect } from "react";
import logo from "../assets/media/logo.svg";
import menuSvg from "../assets/media/menu.svg";
import crossSvg from "../assets/media/cross.svg";
import clsx from "clsx";
import { motion } from "motion/react";
import { Module } from "./Module";
import { Link } from "react-router-dom";

type HeaderVariant = "default" | "cars";

interface HeaderProps {
  variant?: HeaderVariant;
}

export const Header = ({ variant = "default" }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`w-full h-[65px] flex items-center justify-between\ 
      px-6 md:px-16 lg:px-24 xl:px-32 
      border-b border-b-gray-200 
      ${variant === "cars" ? "bg-white" : "bg-[#F1F5F9]"}`}
    >
      <Link to="/">
        <img src={logo} alt="logo" className="h-8" />
      </Link>

      <div
        className={clsx(
          "max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-[65px] max-sm:border-t",
          "right-0 z-50",
          "flex flex-col sm:flex-row items-start sm:items-center",
          "gap-4 sm:gap-8 max-sm:p-4",
          "transition-all duration-300",

          variant === "cars" ? "bg-white" : "bg-[#F1F5F9]",

          open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"
        )}
      >
        <nav className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-[14px] text-gray-600">
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/cars" onClick={() => setOpen(false)}>
            Cars
          </Link>
          <Link to="/my-bookings" onClick={() => setOpen(false)}>
            My Bookings
          </Link>
        </nav>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-200 px-3 rounded-full max-w-56 sm:ml-4">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500 text-sm"
            placeholder="Search cars"
            type="text"
          />
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8359 10.6143L14.9999 14.694"
              stroke="#7A7B7D"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.14099 11.7381C11.8699 10.602 13.142 7.51382 11.9822 4.84049C10.8224 2.16716 7.67004 0.921022 4.94113 2.05716C2.21222 3.1933 0.940171 6.28148 2.09993 8.95481C3.25969 11.6281 6.41208 12.8743 9.14099 11.7381Z"
              stroke="#7A7B7D"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="flex max-sm:flex-col items-start sm:items-center gap-4 sm:gap-6 sm:ml-4">
          <button className="cursor-pointer text-sm">List cars</button>
          <button
            onClick={() => setShowLogin(true)}
            className="cursor-pointer px-6 sm:px-8 py-2 bg-[#2563eb] hover:bg-[#1e4fc0] transition-all text-white rounded-lg text-sm"
          >
            Login
          </button>
        </div>
      </div>

      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close menu" : "Open menu"}
        className="sm:hidden cursor-pointer ml-4"
      >
        <img
          src={open ? crossSvg : menuSvg}
          alt={open ? "close menu" : "open menu"}
        />
      </button>

      {showLogin && <Module />}
    </motion.header>
  );
};
