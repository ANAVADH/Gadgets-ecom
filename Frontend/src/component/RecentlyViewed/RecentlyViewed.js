import React from 'react'
import ViewItems from './ViewItems'
import './view.css'

function RecentlyViewed() {
  return (
    <div className='rvi'>
           <div className='secheadding'>
         <h4  className='fw-bold'>Recently viewed</h4>
         <h6 className='vv text-primary'>view all</h6>
        </div>
        <div className='smit'>
        <ViewItems/>

      </div>
    
    </div>
  )
}

export default RecentlyViewed
