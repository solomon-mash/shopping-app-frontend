import React from 'react';
import './styles/homepage.css';
import { useState } from "react";
import Homepage from './index';
import Header from './navbar';
function App (){
  const [activeTab, setActiveTab] = useState("Home");
  
  const handleTabClick = (tab) => {
    setActiveTab(tab); 
  };
  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return < Homepage/>; 
      case 'Projects':
        return<div> Projects </div>; 
      case 'Blog':
        return <div> Blog </div>; 
      case 'Contact':
        return <div> Contact </div>; 
      
     
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
              <a href="#home" className={activeTab === "Home" ? "active" : ""} onClick={() => handleTabClick("Home")}>  All Categories </a>      
              <a href="#Products" className={activeTab === "Products" ? "active" : ""} onClick={() => handleTabClick("Products")}>  Products </a>   
              <a href="#Blog" className={activeTab === "Blog" ? "active" : ""} onClick={() => handleTabClick("Blog")}>  Blog </a>   
              <a href="#Contact" className={activeTab === "Contact" ? "active" : ""} onClick={() => handleTabClick("Contact")}> Contact </a>   
              </ul>
          
          </div>
          <div className='right-nav'>
              <ul>
              <a href="#sale" className={activeTab === "Sale" ? "active" : ""} onClick={() => handleTabClick("Sale")}>  LIMITED SALE  </a>      
              <a href="#Seller" className={activeTab === "Seller" ? "active" : ""} onClick={() => handleTabClick("Seller")}>  Best Seller </a>   
              <a href="#Arrival" className={activeTab === "Arrival" ? "active" : ""} onClick={() => handleTabClick("Arrival")}>  New Arrival </a>   
              </ul>
          
          </div>
          
          </div>
      </div>
      <div className='main-window'>{renderContent()}</div>
      </div>
  )
}

export default App