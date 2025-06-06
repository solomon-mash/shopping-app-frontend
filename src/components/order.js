import React from "react";
import './styles/order.css';
import Header from "./navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";


const Order = ()=>{
const {order_id} = useParams();
const [items, setItems] = useState([]);
const [count, setCount] = useState(1);
const discount = 2;
const [activeEvent, setEvent] = useState("card");
const navigate = useNavigate();
const [isLoading, setLoading] = useState(true);
console.log(order_id);

const handleEvent = (event)=>{
    setEvent(event);
};

const renderContent = ()=>{
    switch (activeEvent){
        case 'card':
            return <div>
                <div className="credit-card-details">
                    Card Number
                    <input id="input-options" type="text" maxLength={16} minLength={16} placeholder="1234 1234 1234 1234" />
                    Card Holder
                    <input id="input-options" type="text" placeholder="Name" />
                    <div className="credit-card">
                        <div className="expire-date">
                            Expire date
                            <input id="credit-input-options" type="text" placeholder="MM/YY"/>
                        </div>
                        <div className="cvc-code">
                            CVC Code 
                            <input id="credit-input-options" type="number" placeholder="0000" />

                        </div>

                    </div>
                    <h5> Amount: ${orderItem.price*count - discount}</h5>

                    <div className="proceed-button">
                    <button> Proceed</button>

                    </div>
                </div>
            </div>;
        case 'mpesa':
            return <div> 
                <div className="mpesa-div">
                    <div  className="mpesa-content">
                        <h4> Pay For Your Shopping using Mpesa</h4>
                        <small> Enter Phone Number Below and check for popup on your device to proceed with payment</small>
                        <input type="text" id="input-options" placeholder="+254" />

                        <h5> Amount: ${orderItem.price*count - discount}</h5>
                    </div>
                    <div className="proceed-button">
                        <button> Proceed </button>

                    </div>
                </div>
            </div>;
        default:
            return <div> Page not Found</div>;

    }
}


useEffect(()=>{
    fetch("https://shopping-backend-ko0d.onrender.com/api/products/")
    .then((response)=>response.json())
    .then((data)=>{
    setItems(data);
    console.log(data);
    setLoading(false);
})
    .catch((error)=>console.error(error))

},
[]);

const increment = ()=>{
    

    setCount(count => count + 1);
    
}

const decrement = ()=>{
    if (count<=1){
        setCount(1);        

    }  
    else{
        
        setCount(count => count - 1);


    }

    
    
    
}
const orderItem = items.find((p)=>p.product_id === parseInt(order_id));
if(!orderItem) return (
<div>
         <div className="order-details-container">
      
      <button className="back-button" onClick={() => navigate(-1)}>
          ← Back to Products
        </button>
          <div className="spinner-center">
             <ClipLoader color="#3498db" size={50} className="spinner"/>
             </div>
        </div>

    </div>);
 return(
    <div className="order-main">
        <Header />

        <div className="order-content">
            <div className="order-name" onClick={()=>navigate(`/cart`)}>
                <h5>Your Cart</h5>
            </div>
            {isLoading ? <ClipLoader color="#3498db" size={50} className="spinner"/> : (

            <div className="order-body">

                    <div className="order-display">

                        <div className="order-image">
                            <img src={`https://res.cloudinary.com/dmvtxjx0v/${orderItem.image}`} alt="" />
                        </div>
                        <div className="order-list">
                        <h5>{orderItem.name }</h5>
                            <small>{count} items</small>
                        <div className="order-buttons">
                            <div className="count-div">
                                <button onClick={decrement} > - </button>
                                <div className="count">
                                    <p>{count}</p>
                                </div>
                                <button onClick={increment} ><b> + </b> </button>
                            </div>
                            <div className="total-price">
                                <h5> $ {orderItem.price*count}</h5>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="order-details">
                        <div className="summary-window">
                            <h5> Summary </h5>
                            <div className="summary-table">
                                <div className="left-summary-table">
                                    <table>
                                        <tr>
                                            <td> Subtotal ({count} items)</td>
                                            <td> $ {count * orderItem.price}</td>
                                        </tr>
                                        <tr>
                                            <td> Shopping Discount </td>
                                            <td> $ {discount} </td>
                                        </tr>
                                        <tr>
                                            <td> Tax (Calculated at checkout)</td>
                                            <td> $ 0.00</td>
                                        </tr>
                                    </table>
                                    <hr />
                                    <div className="table-calculation">
                                        <h5> Amount </h5>
                                        <h5> $ {count * orderItem.price - discount}</h5>
                                    </div>
                                   
                                </div>
                                
                            </div>
                            <div className="checkout-button">
                                <button type="submit"> Proceed To Checkout Below </button>
                            </div>
                        </div>
                        
                    </div>

                </div>
)}</div>
        <div className="main-checkout">
        <div className="checkout-div">
            <div className="checkout-options">
                <button className={activeEvent === "card" ? "active": ""} onClick={()=>handleEvent("card")}> Card </button>
                <button className={activeEvent === "mpesa" ? "active": ""} onClick={()=>handleEvent("mpesa")}> Mpesa </button>
            </div>
            <div className="checkout-display"> {renderContent()}</div>
        </div>
        </div>
        </div>
 )
}
export default Order