import React from 'react';
import './styles/navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';

const Header = ()=>{
const navigate = useNavigate();
  return(

    <div className="shop">
              <div className="shop-name" onClick={()=>navigate(`/`)}> 
              <h2> E-Shop </h2>
              </div>
              <div className='right-div'>
              <div className='search-div'>
                <input type='search' id="search-bar" placeholder='Search Products here' />
                <button type='submit'><FontAwesomeIcon icon={faSearch}/></button>
                </div>
                <div className='cart' onClick={()=>navigate(`/cart`)} >
                  <h4> <FontAwesomeIcon icon={faShoppingCart}  /> Cart</h4>
                </div>
                <div className='account'>
                  <h5> <FontAwesomeIcon icon={faCircleUser}/> User Account</h5>
                </div>
              </div>
          </div>
)
}
export default Header