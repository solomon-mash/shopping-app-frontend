import React from 'react';
import './styles/homepage.css';
import { useState } from "react";
import Header from './navbar';
import { useNavigate } from "react-router-dom";
import Homepage from './index';
function App (){
  const [activeTab, setActiveTab] = useState("Home");
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab); 
  };
  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <Homepage />;
      case 'Blog':
        return <div> Blog </div>; 
      case 'Contact':
        return <div> Contact </div>; 

      case 'Sale':
        return<div> Sales </div>; 
      case 'Seller':
        return <div> Seller </div>; 
      case 'Arrival':
        return <div> Arrival </div>;
     
      default:
        return <div>Page not found</div>;
    }
  };
  return(
    <div>
      <div className="mainbar">
      
          <Header />
        <div className="nav-contents">
          <div className='left-nav'>
              <ul>
              <button className={activeTab === "Home" ? "active" : ""} onClick={() => handleTabClick("Home")}>  Home </button>      

              <button className={activeTab === "Categories" ? "active" : ""} onClick={() => navigate("/products/")}> Categories </button>      
              <button className={activeTab === "Products" ? "active" : ""} onClick={() => navigate("/products/")}>  Products  </button>    
              <button className={activeTab === "Blog" ? "active" : ""} onClick={() => handleTabClick("Blog")}>  Blog  </button>     
              <button className={activeTab === "Contact" ? "active" : ""} onClick={() => handleTabClick("Contact")}> Contact  </button>   
              </ul>
          
          </div>
          <div className='right-nav'>
              <ul>
              <button className={activeTab === "Sale" ? "active" : ""} onClick={() => handleTabClick("Sale")}>  LIMITED SALE  </button>      
              <button className={activeTab === "Seller" ? "active" : ""} onClick={() => handleTabClick("Seller")}>  Best Seller </button>   
              <button className={activeTab === "Arrival" ? "active" : ""} onClick={() => handleTabClick("Arrival")}>  New Arrival </button>  
              </ul>
          
          </div>
          
          </div>
      </div>
      <div className='main-window'>{renderContent()}</div>
      </div>
  )
}

export default App