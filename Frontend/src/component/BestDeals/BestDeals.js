import React from 'react'
import Items from './Items'
import './deals.css'

function BestDeals() {
  return (
    <div className='parent'>
        <div className='headding'>
         <h2>Best Deals</h2>
         <h6 className='vv text-primary'>view all</h6>
        </div>
        <div className='products'>
            <Items/>
        </div>
      
    </div>
  )
}

export default BestDeals
