import React from 'react'
import Items from './Items'
import './deals.css'

function BestDeals() {
  return (
    <div className='parent'>
        <div className='headding'>
         <h2>Best Deals</h2>
        </div>
        <div className='products'>
            <Items/>
        </div>
      
    </div>
  )
}

export default BestDeals
