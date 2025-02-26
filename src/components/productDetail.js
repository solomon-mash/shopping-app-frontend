import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import './styles/detail.css';
import {useState, useEffect} from "react";
import {useCart}  from "./CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts]=useState([]);


  useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/products/")
    .then((response)=> response.json())
    .then((data)=>{
      setProducts(data);
    })
    .catch((error)=>console.error("Error Fetching Data", error));
    
  },
[]);
  const product = products.find((p) => p.product_id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) return;

  return (
    <div className="product-details-container">
    <button className="back-button" onClick={() => navigate(-1)}>
        ← Back to Products
      </button>
      <div className="product-details">
        <div className="item-showcase">
          <img src={`http://127.0.0.1:8000${product.image}`} alt="" />
        </div>
        <div className="item-details">
          <h3> {product.name}</h3>
          <h5> $ {product.price}</h5>
          <div className="services-div">
            <div className="list-services">
            <p> Services:  </p>
            <p> Color: </p>
            <p> Promotions:</p>
            <p> Quantity:</p>
            </div>
            <div className="services-list">
                <p> Fulfilled by <button id='shop_pid' onClick={ (e) => {
    e.stopPropagation(); 
    navigate(`/shop/${product.shop}`)
                        }}> {product.shop_name} </button></p>
                <p> Black </p>
                <p> 20% Discount </p>
                <p> 1 </p>
            </div>
          </div>
          

          <div className="buttons">
        <button className="order-button">Order Now</button>
        <button className="cart-button" onClick={()=>addToCart(product.product_id)}>Add to Cart</button>
      </div>

      
        </div>
      </div>

      
    </div>
    
    
  );
};

export default ProductDetails;
