import React from 'react';
import Header from './navbar';
import { useState, useEffect } from "react";
import './styles/productlist.css';
import { ClipLoader } from "react-spinners";

import { useNavigate } from "react-router-dom";





const ProductList = ()=>{
    const navigate = useNavigate(); 
    const [activeCategory, setActiveCategory] = useState("featured");
    const [isLoading, setLoading] = useState(true);
    
    const handleCategoryClick = (category) => {
        setActiveCategory(category); 
    };

    const [products, setProducts]=useState([]);

    useEffect(()=>{
        fetch("https://shopping-backend-ko0d.onrender.com/api/products/")
        .then((response)=> response.json())
        .then((data)=>{
            setProducts(data);
            setLoading(false);
        })
        .catch((error)=>console.error("Error Fetching Data", error));
    },
[]);


    const renderContent = () => {
        switch (activeCategory) {
          case 'featured':
            return <div className='window-products'> 

            {isLoading ? 
                         <ClipLoader color="#3498db" size={50} className="spinner"/>
                         
                          : (
                <div className='product-cards-window'>
                    
                    {products.map((product, index)=>(
                        
                        <div className="product-cards" onClick={() => navigate(`/product/${product.product_id}`)}>
                        <div className="product-cards-image">
                        <img src={`https://res.cloudinary.com/dmvtxjx0v/${product.image}`} alt="" id="products-image"/>
                        </div>
                        <small>by <button id='shop_pid' onClick={ (e) => {
    e.stopPropagation(); 
    navigate(`/shop/${product.shop}`)
                        }}> {product.shop_name} </button>
  </small>

                        <h5> {product.name}</h5>
                        
                        <div className="product-price-container">
                        <p> $ {product.price} </p>
                        </div>

                        </div>
                    ))}
                </div>
            )}
            </div>; 
          case 'phones':
            return <div className='window-products'> 
            {isLoading ? <ClipLoader color="#3498db" size={50} className="spinner"/> : (

            <div className='product-cards-window'>
                {products.filter((product)=>product.category === "phones").map((product, index)=>(
                    <div className="product-cards" onClick={() => navigate(`/product/${product.product_id}`)}>
                    <div className="product-cards-image">
                    <img src={`https://res.cloudinary.com/dmvtxjx0v/${product.image}`} alt=""/>
                    </div>
                    <small>by <a href="#shops" onClick={ (e) => {
    e.stopPropagation(); 
    navigate(`/shop/${product.shop}`)
                        }}> {product.shop_name}</a>
  </small>
                    <h5> {product.name}</h5>
                    
                    <div className="product-price-container">
                    <p> $ {product.price} </p>
                    </div>

                    </div>
                ))}
            </div>
            )}
        </div>; 
          case 'laptops':
            return<div className='window-products' > 
            {isLoading ? <ClipLoader color="#3498db" size={50} className="spinner"/> : (

            <div className='product-cards-window'>
                {products.filter((product)=>product.category === "laptops").map((product, index)=>(
                    <div className="product-cards" onClick={() => navigate(`/product/${product.product_id}`)}>
                    <div className="product-cards-image">
                    <img src={`https://res.cloudinary.com/dmvtxjx0v/${product.image}`} alt="" id="products-image"/>
                    </div>
                    <small>by <a href="#shops" onClick={ (e) => {
    e.stopPropagation(); 
    navigate(`/shop/${product.shop}`)
                        }}> {product.shop_name}</a>
  </small>
                    <h5> {product.name}</h5>
                    
                    <div className="product-price-container">
                    <p> $ {product.price} </p>
                    </div>

                    </div>
                ))}
            </div>
            )}
        </div>;
          case 'clothing':
            return <div className='window-products' > 
            {isLoading ? <ClipLoader color="#3498db" size={50} className="spinner"/> : (

            <div className='product-cards-window'>
                {products.filter((product)=>product.category === "clothing").map((product, index)=>(
                    <div className="product-cards" onClick={() => navigate(`/product/${product.product_id}`)}>
                    <div className="product-cards-image">
                    <img src={`https://res.cloudinary.com/dmvtxjx0v/${product.image}`} alt="" id="products-image"/>
                    </div>
                    <small>by <a href="#shops" onClick={ (e) => {
    e.stopPropagation(); 
    navigate(`/shop/${product.shop}`)
                        }}> {product.shop_name}</a>
  </small>
                    <h5> {product.name}</h5>
                    
                    <div className="product-price-container">
                    <p> $ {product.price} </p>
                    </div>

                    </div>
                ))}
            </div>
            )}
        </div>;
          case 'footwears':
            return <div className='window-products'> 
                            {isLoading ? <ClipLoader color="#3498db" size={50} className="spinner"/> : (

            <div className='product-cards-window'>
                {products.filter((product)=>product.category === "footwears").map((product, index)=>(
                    <div className="product-cards" onClick={() => navigate(`/product/${product.product_id}`)}>
                    <div className="product-cards-image">
                    <img src={`https://res.cloudinary.com/dmvtxjx0v/${product.image}`} alt="" id="products-image"/>
                    </div>
                    <small>by <a href="#shops" onClick={ (e) => {
    e.stopPropagation(); 
    navigate(`/shop/${product.shop}`)
                        }}> {product.shop_name}</a>
  </small>
                    <h5> {product.name}</h5>
                    
                    <div className="product-price-container">
                    <p> $ {product.price} </p>
                    </div>

                    </div>
                ))}
            </div>
                            )}
        </div>;
          case 'appliances':
            return <div className='window-products'> 
            {isLoading ? <ClipLoader color="#3498db" size={50} className="spinner"/> : (

            <div className='product-cards-window'>
                {products.filter((product)=>product.category === "appliances").map((product, index)=>(
                    <div className="product-cards" onClick={() => navigate(`/product/${product.product_id}`)}>
                    <div className="product-cards-image">
                    <img src={`https://res.cloudinary.com/dmvtxjx0v/${product.image}`}alt="" id="products-image"/>
                    </div>
                    <small>by <a href="#shops" onClick={ (e) => {
    e.stopPropagation(); 
    navigate(`/shop/${product.shop}`)
                        }}> {product.shop_name}</a>
  </small>
                    <h5> {product.name}</h5>
                    
                    <div className="product-price-container">
                    <p> $ {product.price} </p>
                    </div>

                    </div>
                ))}
            </div>
            )}
        </div>; 
          case 'speakers':
            return <div className='window-products'> 
            {isLoading ? <ClipLoader color="#3498db" size={50} className="spinner"/> : (

            <div className='product-cards-window'>
                {products.filter((product)=>product.category === "speakers").map((product, index)=>(
                    <div className="product-cards" onClick={() => navigate(`/product/${product.product_id}`)}>
                    <div className="product-cards-image">
                    <img src={`https://res.cloudinary.com/dmvtxjx0v/${product.image}`} alt="" id="products-image"/>
                    </div>
                    <small>by <a href="#shops" onClick={ (e) => {
    e.stopPropagation(); 
    navigate(`/shop/${product.shop}`)
                        }}> {product.shop_name}</a>
  </small>
                    <h5> {product.name}</h5>
                    
                    <div className="product-price-container">
                    <p> $ {product.price} </p>
                    </div>

                    </div>
                ))}
            </div>
            )}
        </div>;
          
          default:
            return <div>Page not found</div>;
        }
      };
    return(
        <div className='product-main'>
            <Header />

            <div className='products-showcase'>

                <div className='categories-list'>
                <div className='home-button'>
                <button className="home-back-button" onClick={() => navigate("/")}>
                Home
      </button>
                </div>
                    <ul>
                    <button className={activeCategory === "featured" ? "active" : ""} onClick={() => handleCategoryClick("featured")}>  Featured </button>    

                    <button className={activeCategory === "phones" ? "active" : ""} onClick={() => handleCategoryClick("phones")}>  Phones </button>    
                    <button className={activeCategory === "laptops" ? "active" : ""} onClick={() => handleCategoryClick("laptops")}> Laptops </button>  
                    <button className={activeCategory === "clothing" ? "active" : ""} onClick={() => handleCategoryClick("clothing")}>  Clothing </button>   
                    <button className={activeCategory === "footwears" ? "active" : ""} onClick={() => handleCategoryClick("footwears")}> Footwear </button>    
                    <button className={activeCategory === "appliances" ? "active" : ""} onClick={() => handleCategoryClick("appliances")}>  Appliances </button>  
                    <button className={activeCategory === "speakers" ? "active" : ""} onClick={() => handleCategoryClick("speakers")}> Speakers </button>   
                   
                    </ul>
          
        
                </div>
                <div className='products-show'>
                {renderContent()}
                </div>
            </div>
            
        </div>
            

    )
}
export default ProductList