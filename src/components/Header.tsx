import React, { useState } from "react";
import logo from "../assets/media/logo-CF3gF4eH.svg";
import menu_svg from "../assets/media/menu.svg";
import clsx from "clsx";
import car from "../assets/media/car.png";

export const Header = () => {
  const [open, setopen] = useState(false);
  return (
    <header className="w-full h-[65px] bg-[#F1F5F9] flex justify-between items-center px-[18px] border-b border-b-gray-500 ">
      <img src={logo} alt="logo" />
      <button
        onClick={() => {
          if (open) {
            setopen(false);
          } else {
            setopen(true);
          }
        }}
      >
        <img src={menu_svg} alt="menu_icon" />
      </button>
      <div
        className={clsx("fixed top-17 w-full h-full p-4", {
          "-left-full": !open,
          "left-0": open,
        })}
      >
        <ul className="flex flex-col gap-3 p-4 text-[14px]">
          <li>Home</li>
          <li>Cars</li>
          <li>My Bookings</li>
          <li>List Cars</li>
        </ul>
        <button className="mt-4 p-2 bg-black text-white rounded">Login</button>
      </div>
      < src={} img/>
    </header>
  );
};
