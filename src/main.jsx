import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from "./error-page";
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import App from './App';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import DonateUs from './components/DonateUs';
import WhatWeDo from './components/WhatWeDo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/whatwedo",
        element: <WhatWeDo></WhatWeDo>
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>
      }
      ,
      {
        path: "/donate",
        element: <DonateUs></DonateUs>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
