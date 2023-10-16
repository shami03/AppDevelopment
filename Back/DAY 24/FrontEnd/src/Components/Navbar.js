import React, { useState } from 'react';
import './Navbar.css';
import { toggleSidebar } from '../redux/sidebarSlice';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'rsuite';
import { Link, useNavigate } from 'react-router-dom';
import { getEmail, getToken } from './LocalStorage';
import { useEffect } from 'react';
import axios from 'axios';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
  const handleLogout = () => {
    if (window.confirm("Are You sure to logout?")) {
      localStorage.clear();
   
      nav("/");
    }
  };
  const nav=useNavigate();
  const [show, setShow] = useState(false);
  const token=getToken();
  const CryptoJS = require('crypto-js');
  const [isValidityExpired,setValidity]=useState(true)
 const Email=getEmail();

 const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
 const dispatch = useDispatch();
 const handleToggleSidebar = () => {
   dispatch(toggleSidebar());
  };
  useEffect(()=>{
 
    try {
      const parts = token.split('.');
      const decodedPayload = CryptoJS.enc.Base64.parse(parts[1]).toString(CryptoJS.enc.Utf8);
      console.log(decodedPayload);
      const parsedPayload = JSON.parse(decodedPayload);
      if (parsedPayload.exp) {
        const currentTimestamp = Math.floor(Date.now() / 1000);
        if (parsedPayload.exp < currentTimestamp) {
          alert("Session Expired. Please Login again....!")
          localStorage.clear();
          nav("/login")
        }
      } else {
        console.log('JWT does not contain an expiration claim (exp).');
      }
    } catch (error) {
      console.error('Error decoding JWT:', error);
    }
  },[])
  return (
    <div className="nav">
      <header>
        <div className="nav-content">
    <div className='logo'>
     <Link to="/">  <img  class="logo1" alt="logo" src="data:image/png;base64,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"/>
     </Link>   </div>
          <div class="logo-name"> 
         {isSidebarOpen ? (<Link to="/"><h2 class="name">GameHub</h2></Link>):(<></>) }
          </div>
          <div className="toggle" onClick={handleToggleSidebar}>
         {Email ?(<>  <MenuIcon/></>):(<></>)}
        </div>
          <nav className={`${show ? 'mobile-nav' : 'list'}`}>
            <ul>
              <li class="li-search">
              <input class="search" type="text" placeholder="Search..."/>
             </li>
             <div className="top-bar">
  <ul>
    <li className="li-elements">
      <Link to="/faq">FAQ'S</Link>
    </li>
    <li className="li-elements">
      <Link to="/about">About</Link>
    </li>
    <li className="li-elements">
      <Link to="/gamepage">Explore</Link>
    </li>
    <li className="li-elements">
    <div

    onClick={handleLogout}  >Logout
    </div>
    </li>
    <li className="li-elements">
      <img src="https://w7.pngwing.com/pngs/537/580/png-transparent-bell-notification-communication-information-icon.png" className="notification-icon" alt="Notification Icon"/>
    </li>
    {Email ? (
      <>
        <li className="li-elements">
          <img className="notification-icon" src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="User Icon"/>
        </li>
        <li className="li-elements">
          <h5 className="li-elements">{Email}</h5>
        </li>
      </>
    ) : (
      <li className="li-elements">
        <Link to="/login" className="login-link">
          <h3 className="li-elements">Login</h3>
        </Link>
      </li>
    )}
  </ul>
</div>
            </ul>
          </nav>
        </div>
        <div className='socialIcons'></div>
      </header>
    </div>
  );
};

export default Navbar;
