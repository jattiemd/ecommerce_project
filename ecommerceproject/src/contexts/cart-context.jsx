import { createContext, useEffect, useState } from "react";
import { getProduct } from "../services/api";
import { toast } from 'react-toastify'
import ToastMsg from "../components/Toast";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [ cart, setCart ] = useState(() => {
        const savedCart = localStorage.getItem('cart')
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [ cartTotal, setCartTotal ] = useState(0.00);
    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));     // Using JSON.stringify() to maintain the structure of the JSON data
        setCartTotal(getCartTotal());
    }, [ cart, cartTotal ])

    // get, prep and add product to cart
    const addToCart = (productID, quantity) => {
        if (!quantity) quantity = 1;
        getProduct(productID).then(data => {
            const newCartProduct = {
                id: data.id,
                title: data.title,
                price: data.price,
                thumbnail: data.thumbnail,
                quantity,
            };
            const existingProduct = cart.find(item => item.id === newCartProduct.id);
            if (existingProduct) removeFromCart(existingProduct.id);
            setCart(prevCartItems => [...prevCartItems, newCartProduct]);
            toast(<ToastMsg message={`${newCartProduct.title} added to cart`} />)
        })
    }

    // Getting total of all items in cart
    const getCartTotal = () => {
        let total = 0.00;
        for (let obj of cart) {
            total += obj.price * obj.quantity;
        }
        return total.toFixed(2);
    }

    // Getting product Quantity
    const getProductQuantity = (productID) => {
        const cartProduct = cart.find(item => item.id === productID);
        return cartProduct ? cartProduct.quantity : 1;
    }

    // Remove product from cart
    const removeFromCart = (productID) => {
        setCart(prevCartItems => prevCartItems.filter(item => item.id !== productID));
    }

    // Update cart product quantity
    const updateProductQuantity = (productID, quantity) => {
        setCart(prevCartItems => prevCartItems.map(item => 
        item.id === productID ? { ...item, quantity } : item
        ));
    };


    return (
        <CartContext.Provider value={{ cart, setCart, cartTotal, addToCart, removeFromCart, getProductQuantity, updateProductQuantity}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider