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
    <div className='inner-cards row'>


    <div className="card cdz mb-3 border border-light  col">
     <div className="row g-0">
    <div className="col-md-4">
       <img src="https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/google-pixel-watch/hero-static/chalk-polished/google-pixel-watch-chalk-device-3qt.png" className="img-fluid rounded-start" alt="products"/>
    </div>
    <div className="col-md-8">
      <div className="card-body ">
        <h5 className="scc card-title">Fitness and tracker</h5>
        <p className="card-text fw-bold text-primary">$33.3</p>
        <p class="card-text"><small class="text-primary">
            <div className='bar'>

            </div>
            
            </small></p>
      </div>
    </div>
  </div>
  </div>

  <div className="card cdz mb-3 border border-light col">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="http://cdn.shopify.com/s/files/1/0636/8837/6542/products/049-024-WH_XBX_AfterglowWave_BLACK_ECOM-FRONT.Camera1_f45bec4e-98c2-45d9-94bd-9d593586d68a.png?v=1664391713" className="img-fluid rounded-start" alt="products"/>
    </div>
    <div className="col-md-8">
      <div className="card-body ">
        <h5 className="scc card-title">Xbox white joystick</h5>
        <p className="card-text fw-bold text-primary">$56.0</p>
        <p class="card-text"><small class="text-primary">
        <div className='bar'>

</div></small></p>
      </div>
    </div>
  </div>
 </div>


    </div>
    <i className='thei' class=" fa-solid fa-ellipsis"></i>
    <h6 className='themore'>View more</h6>
  </div>
</div>
      
    </div>
  )
}

export default BannerCard
