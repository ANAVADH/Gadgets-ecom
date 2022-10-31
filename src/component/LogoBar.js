import React from 'react'
import logo from './images/logo.png'


function LogoBar() {
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
        
        
        <i class="fa-solid fa-cart-shopping"></i>
    
        
        <i class="fa-solid fa-circle-user"></i>
        
        </div>
        <div className='btn'>
            <button>Classifieds</button>
        </div>
    
      
    </div>
  )
}

export default LogoBar
