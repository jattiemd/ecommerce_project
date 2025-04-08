import { createContext, useEffect, useState } from "react";
import { getProduct } from "../services/api";
import { toast } from 'react-toastify'
import ToastMsg from "../components/Toast";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart')
        return savedCart ? JSON.parse(savedCart) : [];
    });
    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));     // Using JSON.stringify() to maintain the structure of the JSON data
        console.log(cart);
    }, [ cart ])


    const addToCart = (productID, quantity) => {
        if (!quantity) quantity = 1;
        getProduct(productID).then(data => {
            const cartItem = {
                id: data.id,
                title: data.title,
                price: data.price,
                thumbnail: data.thumbnail,
                quantity,
            };
            setCart(prevItems => [...prevItems, cartItem]);
            toast(<ToastMsg message={`${cartItem.title} added to cart`} />)
        })
    }


    return (
        <CartContext.Provider value={{ cart, setCart, addToCart}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider