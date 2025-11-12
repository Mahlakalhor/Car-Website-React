import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import {Home} from "./pages/Home";
import {MyBooking} from "./pages/MyBooking";
import { Cars } from "./pages/Cars";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cars",
    element: <Cars />,
  },
  {
    path: "/my-bookings",
    element: <MyBooking />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
