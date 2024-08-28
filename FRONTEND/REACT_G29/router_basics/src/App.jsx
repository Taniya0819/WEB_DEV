import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navlink from './components/Navlink'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home'
import Products from './components/Products'
import Services from './components/Services'
import User from './components/User'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navlink/>
  },

  {
    path: "/Home",
    element: <> <Navlink/> <Home/> </>,
    },

  {
  path: "/Products",
  element: <> <Navlink/> <Products/> </>,
  },

  {
  path: "/Services",
  element: <> <Navlink/> <Services/> </>,
  },

  {
    path: "/User",
    element: <> <Navlink/> <User/> </>,
  },

  {
    path: "/User/:username",
    element: <> <Navlink/> <User/> </>,
  },


]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
