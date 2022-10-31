import React from 'react'

function Nav() {
  return (
    <div>
        <div className='header'>
            <div className='container d_flex'>
                <div className='category d_flex'>
                 <label>All categories <i class="fa-solid fa-chevron-down"></i></label>
                </div>

                <div className='links'>
                    <ul className='nav f_flex'>
                        <li>Books</li>
                        <li>Electronics</li>
                        <li>Real Estate</li>
                        <li>Cars-Bikes</li>
                        <li>Dorm-Furniture</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Men</li>
                        <li>Music</li>
                        <li>Hobbies Games</li>
                        <li>Toys</li>
                        <li>Kids</li>
                    </ul>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Nav
