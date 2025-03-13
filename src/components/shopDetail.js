import {React, useState, useEffect} from "react";
import './styles/shopdetail.css';
import Header  from "./navbar";
import { useParams, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";


const ShopDetail = ()=>{
    const {shop_id} = useParams();
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(true);

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("https://shopping-backend-ko0d.onrender.com/api/products/")
        .then((response)=> response.json())
        .then((data)=>{
            console.log(data);
            setProducts(data)
            setLoading(false);
        }).catch((error)=>
            console.error("Error Fetching Data", error));
    },
[]);
    

    const shop_products = products.find((p)=> p.shop === parseInt(shop_id));
    if (!shop_products) return (
    <div>
        <Header />
        <div className="shop-main-window">
         
             <hr />
     
             <button className="button-home" onClick={() => navigate("/")}>
     ← Home
   </button>
   <div className="spinner-center">
   <ClipLoader color="#3498db" size={50} className="spinner"/>
   </div>
    </div>
    </div>
    )
    
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
      {isLoading ? <ClipLoader color="#3498db" size={50} className="spinner"/> : (

                <div className="shop-items-container">
                    {products.filter((item)=>item.shop === parseInt(shop_id)).map((item)=>(
                        <div className="items-cards"  onClick={() => navigate(`/product/${item.product_id}`)}>
                            <div className="item-image">
                            <img src={`https://res.cloudinary.com/dmvtxjx0v/${item.image}`} alt="" />
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
      )}
            </div>
        
          
</div>
    
    )
}

export default ShopDetail