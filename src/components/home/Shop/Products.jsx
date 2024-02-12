/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Products = ({ product, handleAddToCart }) => {
    const {category, id, name,price,  picture}=product;
    return (
        <div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Category: {category}</p>
                    <p>Price : ${price}</p>
                    
                    <div className="card-actions justify-end">
                        <button onClick={()=>handleAddToCart(product)} className="btn w-full btn-primary">Add To Cart</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Products;