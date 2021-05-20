import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from './StateProvider';
import { auth } from "./firebase";

function Header() {

 const[{ basket, user }, dispatch] = useStateValue();

 const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

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
     
     <Link to={!user &&'/Login'} className= "header_link">
     <div onClick={handleAuthenticaton} className="header_option">
     <span className="header_optionOne"> Hello  {!user ? 'Guest' : user.email} </span>
     <span className="header_optionTwo">{user ? 'Sign Out' : 'Sign In'} </span>
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
       <Link to={user && '/checkout' ||!user && '/Login'} className="header_link">

      <div className="header_basket">

        <ShoppingBasketIcon />
        { user ?
       <span className="header_optionTwo header_count">
        {basket?.length}
        </span> : <span className="header_optionTwo header_count">0</span> }

      </div>
      </Link>

     </div>

    </nav>
    </>

  );
}

export default Header;
