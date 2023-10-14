import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home';
import Donation from './Components/Donations/Donation';
import Statistic from './Components/Statistics/Statistic';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/donations",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistic></Statistic>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);