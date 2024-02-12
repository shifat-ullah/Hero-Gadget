
import { getShoppingCart } from "../utils/fakeDB";

const customHooks = async () => {

    const productData = await fetch('products.json')
    const product = await productData.json();

    const storedCart = getShoppingCart();
    const savedProduct = []

    for (const id in storedCart) {
        const addedProduct = product.find(product => product.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedProduct.push(addedProduct)
        }
    }
    return { product, savedProduct }
}

export default customHooks;