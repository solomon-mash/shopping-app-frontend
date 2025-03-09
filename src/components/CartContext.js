import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const CartProvider = ({ children, userId }) => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   const fetchCart = async () => {
    try {
        const response = await axios.get(`https://shopping-backend-ko0d.onrender.com/api/cart/1/`);
        setCart(response.data.items);
        setLoading(false);
    } catch (err) {
        setError("Failed to load cart items. Please check your internet connection.");
    } finally {
        setLoading(false);
    }
};

useEffect(() => {
    if (userId) fetchCart();
});

    const addToCart = (productId, quantity = 1) => {
        axios.post(`https://shopping-backend-ko0d.onrender.com/api/cart/${userId}/add/`, { product_id: productId, quantity })
            .then(() => refreshCart(), alert("Item added to Cart"))
            
            .catch(error => console.log(error));
        
        
    };

   
    const removeFromCart = async (cartItemId) => {
        try {
            const response = await fetch(`https://shopping-backend-ko0d.onrender.com/api/cart/item/${cartItemId}/remove/`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
    
            if (response.ok) {
                alert("Item sucessfully deleted from cart");
                setCart((prevCart) => prevCart.filter(item => item.id !== cartItemId));
            } else {
                console.error("Failed to remove item");
            }
        } catch (error) {
            console.error("Error removing item:", error);
        }
    };
    

    const refreshCart = () => {
        axios.get(`/api/cart/1/`)
            .then(response => setCart(response.data.items))
            .catch(error => console.log(error));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, loading, error }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
