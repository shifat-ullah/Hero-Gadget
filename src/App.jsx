
import { Outlet, useLoaderData } from 'react-router-dom'
import './App.css'
import Header from './components/sharedPage/header/Header'
import Footer from './components/sharedPage/Footer/Footer'
import { createContext, useState } from 'react'
import  { Toaster } from 'react-hot-toast';


export const productContext = createContext();
export const CartContext = createContext()

function App() {

  const {savedProduct, product}=useLoaderData();
  const [cart, setCart]=useState(savedProduct)
  return (
    <>
      <productContext.Provider value={product}>
        <CartContext.Provider value={[cart, setCart]}>
          <Toaster></Toaster>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
          
        </CartContext.Provider>
      </productContext.Provider>
    </>
  )
}

export default App
