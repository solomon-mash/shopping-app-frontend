import { useCart } from "./CartContext";
import Header from './navbar';
import './styles/Cart.css';
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const Cart = () => {
    const { cart, removeFromCart, loading, error } = useCart();
    const navigate = useNavigate();
    return (
        <div className="cartWindow">
        <Header />
        <div className="cart-display">
        <div className="cart-name">
            <h5>Your Cart</h5>
        </div>
        <small>{cart.length} item ships at checkout </small>

           {loading ===true? (
                    <div className="spinner-center">
                        <ClipLoader color="#3498db" size={50} className="spinner"/>
                    </div>
                ) : error ? (
                    <div className="error-message">{error}</div>
                ) : cart.length === 0 ? (
                    <div className="empty-cart">No items in the cart.</div>
                ) : (

                <div className="carts">

                    {cart.map(item => (

                    <div className="cart-card">
                            <div className="cart-image">
                            <img src={`https://res.cloudinary.com/dmvtxjx0v/${item.product.image}`} alt={item.product.name} width="50" />
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
