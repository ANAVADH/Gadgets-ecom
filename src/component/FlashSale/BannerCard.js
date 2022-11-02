import React from 'react'
import './flash.css'

function BannerCard() {
  return (
    <div>
        <div className="card bg-light text-white fh">
  <img className="fsale card-img" src="https://w7.pngwing.com/pngs/103/232/png-transparent-digital-technology-blue-background-banner-beam-lines-blue-science-and-technology-digital.png" alt="banner"/>
  <div className="tags card-img-overlay">
    <h2 className="card-title">Flash Sale</h2>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Nunc fermentum lacus et libero tincidunt tempus eliv.<br></br>Lorem ipsum dolor sit amet </p>
    <h1 className="card-text fw-bold">05 : 45 : 29 : 14</h1>
  </div>
</div>
      
    </div>
  )
}

export default BannerCard
