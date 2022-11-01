import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import data from './Sample.json'
import Viewer from './Viewer';
import './Banner.css'

function Banner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='sli'>
        <Slider {...settings}>
         {data.map((data) =>  <Viewer data={data} />)}
        </Slider>
      
    </div>
  )
}

export default Banner
