
import { useContext } from 'react';
import { CartContext } from '../../App';
import CartItems from './CartItems';
import { Link } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../../utils/fakeDB';
import toast from 'react-hot-toast';
const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    let totalPrice = 0

    if (cart.length > 0) {
        for (const product of cart) {
            totalPrice = totalPrice + product.price * product.quantity
        }
    }
    const handleDeletCart = (id) => {
        
            const remaining = cart.filter(cart => cart.id !== id);
            setCart(remaining);
            removeFromDb(id)
            return toast.error("Delet Cart Item !🔥")
        
    }

    const handleRemoveAllData = () => {
        if (cart.length > 0) {
            deleteShoppingCart()
            setCart([])
            return toast.error("Delete All Products !🔥")
        }
    }

    const handleCartEmpty =()=>{
        if(cart.length>0){
            deleteShoppingCart()
            setCart([])
           return toast.success("Order seccesfull ! ✅")
        }
        return toast.error('cart is empty! 🔥')
    }
    return (
        <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
            <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 '>
                <h2 className='text-xl font-semibold'>
                    {
                        cart.length > 0 ? 'Review Cart Items' : "Cart Is Empty !"
                    }
                </h2>
                <ul className='flex flex-col mx-auto divide-y divide-gray-700'>
                    {
                        cart.map(product => <CartItems key={product.id} handleDeletCart={handleDeletCart} product={product}></CartItems>)
                    }
                </ul>

                <div className=' text-end'>
                    <h3 className='text-2xl font-bold'>Total amount: {totalPrice}$</h3>
                    <p className=' font-semibold text-gray-400'>Not including taxes and shipping costs</p>

                    <div className="flex mt-2  justify-between">
                        {
                            cart.length > 0 ?
                                <button onClick={() => handleRemoveAllData()} className="btn-primary">Clear Cart</button> :
                                <Link to="/shop"><button className="btn-primary">back to shop</button></Link>

                        }
                        <button onClick={()=>handleCartEmpty()} className="btn-outlined">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;