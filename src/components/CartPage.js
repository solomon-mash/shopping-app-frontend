import React from "react";
import { useCart } from "./CartContext";
import Header from './navbar';
import './styles/Cart.css';
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cart, removeFromCart } = useCart();
    const navigate = useNavigate();
    return (
        <div className="cartWindow">
        <Header />
        <div className="cart-display">
        <div className="cart-name">
            <h5>Your Cart</h5>
        </div>
            <small>{cart.length} item ships at checkout </small>
            {cart.length === 0 ? <p>Cart is empty</p> : (
                
                <div className="carts">
                    {cart.map(item => (
                    <div className="cart-card">
                            <div className="cart-image">
                            <img src={`http://127.0.0.1:8000${item.product.image}`} alt={item.product.name} width="50" />
                            </div>
                            <h5>{item.product.name} </h5>
                            <p> ${item.product.price} </p>

                            <div className="cart-buttons">
                            <button onClick={(e)=> {
                                e.stopPropagation();
                                navigate(`/cart/order/${item.product.product_id}`)
                            }}> Order Now </button>

                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                    </div>
                    ))}
                    </div>
                
            )}
            </div>
        </div>
    );
};

export default Cart;
