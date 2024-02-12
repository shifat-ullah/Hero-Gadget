// import { useLoaderData } from "react-router-dom";
import Products from "./Products";
import { addToDb } from "../../../../utils/fakeDB";
import { useContext } from "react";
import { CartContext, productContext } from "../../../App";
import toast from "react-hot-toast";

const Shop = () => {

    const products = useContext(productContext)
    const [cart, setCart] = useContext(CartContext)

    const handleAddToCart = (product) => {

        let newCart=[];
        const exsist = cart.find (existingProduct => existingProduct.id === product.id)
        if(!exsist){
            product.quantity = 1;
            newCart=[...cart, product]
        }else{
            const res = cart.filter(existingProduct => existingProduct.id !== product.id);
            exsist.quantity = exsist.quantity + 1;
            newCart=[...res, exsist]
        }
        
        setCart(newCart)
        addToDb(product.id) 
        return toast.success("Product Added!🛒")
    }
    return (
        <div className="grid gap-3 w-[96%] mb-3 mr-0 ml-12  mx-auto lg:grid-cols-3 md:grid-col-2 sm:grid-col-1">
            {
                products.map(product => <Products key={product.id} handleAddToCart={handleAddToCart} product={product}></Products>)
            }
        </div>
    );
};

export default Shop;