import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
 
import Detilse from "./components/Detailse/Detilse";
import Notfound from "./pages/Not_found";
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Notfound/>,
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
