import React from "react";
import "./styles/index.css";
import Image from './icons/banner.png';
import { faHeadphones, faRecycle, faTruck } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";



const services = [
    {icon: faHeadphones,
    name: 'Responsive',
    description: 'Customer Service available 24/7'

    },
    {icon: faLock,
        name: 'Secure',
        description: 'Certified marketplace since 2022'
    
    },
    {icon: faTruck,
        name: 'Shipping',
        description: 'Free, Fast and available worldwide'
    
        },
    {icon: faRecycle,
        name: 'Transparent',
        description: 'Support Environment Policies'
    
    },
   
]




const Homepage =()=>{
    const [startIndex, setstartIndex]=useState(0);
    const visibleCards = 3;
    const navigate = useNavigate(); 
    const [products, setProducts] = useState([]);
    useEffect(()=>
    {
        fetch("http://127.0.0.1:8000/api/products/")
        .then((response)=> response.json()).then((data)=>{
            setProducts(data);
        })
        .catch((error)=>console.error("Error Fetching Data", error));
    },
[]);
    const nextSlide=()=>{
        setstartIndex((prevIndex)=>
            prevIndex + 1 >products.length - visibleCards ? 0:prevIndex +1
        )

    }
    const prevSlide=()=>{
        setstartIndex((prevIndex)=>
        prevIndex-1<0 ? products.length - visibleCards: prevIndex -1
        )
    }
    return(
        <div className="main-window">
            <div className="banner">
                <div className="banner-description">
                    <h1> Your One Stop all products Shop </h1>
                    <p> Welcome to a place where you can get everything you want </p>
                    <button type="submit" onClick={()=>navigate('/products')}> Shop Now </button>
                </div>
                <div className="banner-image">
                    <img src={Image} alt="" />
                </div>
            </div>
            <div className="services">
            
            {services.map((service, index)=>(
                <div className="cards">
                <div className="card-icon">
                <FontAwesomeIcon icon={service.icon} id="icon"/>
                </div>
                <div className="card-description">
                <h3> {service.name}</h3>
                <p> {service.description} </p>
                </div>
                </div>

            ))}
            
            </div>
            <div className="featured-carousel">
                <div className="carousel-header">
                    <h4> Featured Products </h4>
                    <a href="#view" onClick={() => navigate(`/products/`)}> View All</a>
                </div>
                <div className="carousel">
                <button className="carousel-button" onClick={prevSlide}>
    ◀
      </button>
                    {products.slice(startIndex, startIndex + visibleCards).map((product, index)=>(
                        <div className="carousel-cards" onClick={() => navigate(`/product/${product.product_id}`)}>
                        <div className="carousel-image">
                        <img src={`http://127.0.0.1:8000/${product.image}`} alt="" id="carousel-image"/>
                        </div>

                        <h5> {product.name}</h5>
                        
                        <div className="price-container">
                        <p> $ {product.price} </p>
                        </div>

                        </div>
                    ))}
                    <button className="carousel-button" onClick={nextSlide}>
    ▶
      </button>
                </div>
            </div>
        </div>
    )
}
export default Homepage