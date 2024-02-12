import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/home/Home.jsx';
import Shop from './components/home/Shop/Shop.jsx';
import About from './components/home/about/About.jsx';
import Cart from './components/cart/Cart.jsx';
import customHooks from '../customshooks/customHooks.js';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // errorElement: <ErrorPage />,
    loader: customHooks,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },{
        path: "/shop",
        element: <Shop></Shop>,
        // loader: ()=> fetch('products.json')
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
        // loader: customHooks,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
