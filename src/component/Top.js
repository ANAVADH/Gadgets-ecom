import React from 'react'

function Top() {
  return (
    <div className='top'>
        <div className='container d_flex'>
            <div className='left side'>
            <i class="fa-solid fa-phone"></i>
            <label>+221 33 66 2</label>
            <i class="fa-solid fa-envelope"></i>
            <label>support@elextra.io</label>
            </div>
            <div className='right side'>
            <i class="fa-solid fa-location-dot"></i>
                <label>Locations</label>
                <label>|</label>
                <label>$ Dollar(us)</label>
                <i class="fa-sharp fa-solid fa-caret-down"></i>
                <label>EN</label>
                <i class="fa-sharp fa-solid fa-caret-down"></i>
            </div>
        </div>
      
    </div>
  )
}

export default Top
