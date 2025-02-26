import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const CartProvider = ({ children, userId }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/cart/${userId}/`)
            .then(response => setCart(response.data.items))
            .catch(error => console.log(error));
    }, [userId]);

    const addToCart = (productId, quantity = 1) => {
        axios.post(`http://127.0.0.1:8000/api/cart/${userId}/add/`, { product_id: productId, quantity })
            .then(() => refreshCart(), alert("Item added to Cart"))
            
            .catch(error => console.log(error));
        
        
    };

    const removeFromCart = (cartItemId) => {
        axios.delete(`/api/cart/item/${cartItemId}/remove/`)
            .then(() => refreshCart())
            .catch(error => console.log(error));
    };

    const refreshCart = () => {
        axios.get(`/api/cart/${userId}/`)
            .then(response => setCart(response.data.items))
            .catch(error => console.log(error));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
