import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Moveis from "./pages/Moveis";
import Contact from "./pages/Contact";
import Detilse from "./componant/Detilse";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>SORROY.........</h1>,
  },
  {
    path: "/Moveis",
    element: <Moveis />,
  
  },

  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Detilse/:ID",
    element: <Detilse />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
