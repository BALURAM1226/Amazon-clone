import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from './StateProvider';

function Header() {

 const[{ basket }, dispatch] = useStateValue();

  return(
    <>
    <nav className="header">
      {/*logo img */}
      <Link to="/"> 
    <img  className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"/>
    </Link>

    {/* search bar */}
     <div className= " header_search">
    <input type="text" className="header_searchInput" />
    <SearchIcon  className="header_searchIcon" />
   </div>
    
     {/*Links */}

     <div className="headerNav">
     
     <Link to="/login" className= "header_link">
     <div className="header_option">
     <span className="header_optionOne">Hello bk</span>
     <span className="header_optionTwo">Sign In</span>
     </div>
     </Link>

    <Link className="header_link">
    <div className ="header_option">
    <span className="header_optionOne">return</span>
    <span className="header_optionTwo"> Oders</span>
    </div>
    </Link>

    <Link className="header_link">
    <div className="header_option">
    <span className="header_optionOne">Your</span>
    <span className ="header_optionTwo">Prime</span>
    </div>
    </Link>

      {/*basket icon */}
       <Link to="/checkout" className="header_link">

      <div className="header_basket">
        <ShoppingBasketIcon />
        <span className="header_optionTwo header_count">
        {basket?.length}
        </span>

      </div>
      </Link>

     </div>

    </nav>
    </>

  );
}

export default Header;