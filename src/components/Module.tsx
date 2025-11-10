import { useState } from "react";

export const Module = () => {
  const [closeLogin, setCloseLogin] = useState(true);
  if (!closeLogin) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        onClick={() => setCloseLogin(false)}
        className="absolute inset-0 bg-black/30 z-40"
      ></div>

      <form className="relative flex flex-col items-start p-8 rounded-lg bg-white w-80 gap-8 border shadow-xl border-gray-200 z-50">
        <h1 className="text-[#4a5565] self-center font-medium text-2xl">
          <span className="text-[#0558fe] font-medium text-2xl">User</span>{" "}
          Login
        </h1>

        <label className="text-sm" htmlFor="email_box">
          Email
        </label>
        <input
          type="email"
          id="email_box"
          placeholder="Type here"
          className="border border-gray-200 rounded-md p-1 w-full text-sm -mt-7"
        />

        <label className="text-sm" htmlFor="password_box">
          Password
        </label>
        <input
          type="password"
          id="password_box"
          placeholder="Type here"
          className="border border-gray-200 rounded-md p-1 w-full text-sm -mt-7"
        />

        <span className="text-sm">
          Create an account?
          <span className="text-sm text-[#0558fe] cursor-pointer hover:underline">
            Click here
          </span>
        </span>

        <button className="bg-[#0558fe] w-full py-2 rounded-md cursor-pointer text-white">
          Login
        </button>
      </form>
    </div>
  );
};
