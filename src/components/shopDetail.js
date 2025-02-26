import {React, useState, useEffect} from "react";
import './styles/shopdetail.css';
import Header  from "./navbar";
import { useParams, useNavigate } from "react-router-dom";

const ShopDetail = ()=>{
    const {shop_id} = useParams();
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/products/")
        .then((response)=> response.json())
        .then((data)=>{
            console.log(data);
            setProducts(data)
        }).catch((error)=>
            console.error("Error Fetching Data", error));
    },
[]);
    

    const shop_products = products.find((p)=> p.shop === parseInt(shop_id));
    if (!shop_products) return;

    
    return(
        <div>
            <Header />
        <div className="shop-main-window">
            <div className="shop-window">
            
                <h4> {shop_products.shop_name}</h4>
            </div>
                <hr />
        
                <button className="button-home" onClick={() => navigate("/")}>
        ← Home
      </button>
      
                <div className="shop-items-container">
                    {products.filter((item)=>item.shop === parseInt(shop_id)).map((item)=>(
                        <div className="items-cards"  onClick={() => navigate(`/product/${item.product_id}`)}>
                            <div className="item-image">
                            <img src={`http://127.0.0.1:8000/${item.image}`} alt="" />
                            </div>
                            <small>by <button id='shop_pid' onClick={ (e) => {
    e.stopPropagation(); 
    navigate(`/shop/${item.shop}`)
                        }}> {item.shop_name} </button></small>
                            <h5>{item.name}</h5>
                            <div className="item-price">
                                <p> $ {item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          
</div>
    
    )
}

export default ShopDetail