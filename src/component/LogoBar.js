import React from 'react'
import logo from './images/logo.png'

function LogoBar() {
  return (
    <div>
        <div className='search'>
            <div className='container c_flex'>
                <div className='logo width'>
                    <img className='logo' src={logo} alt=""/>
                </div>
                <div className='search-box f_flex'>
                    <h5 className='classi'>Classifieds   <i class="fa-solid fa-chevron-down"></i></h5>
                    <input type='text' placeholder='Search here...'/>
                    
                    <span><i class="fa-solid fa-magnifying-glass"></i></span>
                </div>
                <div className='icon f_flex width'>
                <i class="fa-regular fa-heart"></i>
                <i class="fa-solid fa-basket-shopping"></i>
                <i className='fa fa-user icon-circle'></i>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default LogoBar
