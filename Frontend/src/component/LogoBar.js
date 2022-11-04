import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/logo.png'
import Badge from '@mui/material/Badge';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {  useCart } from "react-use-cart";


function LogoBar() {
     const { totalUniqueItems} = useCart();
     
  return (
    <div className='l_header'>

        <div className='logo'>
            <img className='logo_1' src={logo} alt='logo' />
        </div>
        <div className='classfied'>
            <span>Classfieds</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="fa-solid fa-chevron-down"></i>
        </div>
        <div className='search'>
            <input type='text' placeholder='  Search here...'/>
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className='iconz'>
        
        <i class="fa-regular fa-heart"></i>
        
        <Link to='/cart'>
        <Badge className='badgec text-secondary' badgeContent={totalUniqueItems} color="secondary"/>{/* <ShoppingCartIcon /> */}
        <i class="fa-solid fa-basket-shopping"></i>
        </Link>
    
        
        <i class="fa-solid fa-circle-user"></i>
        
        </div>
        <div className='btn'>
            <button>Classifieds</button>
        </div>
    
      
    </div>
  )
}

export default LogoBar
