import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './class.css';
import data from './my.json'
import Button from 'react-bootstrap/Button';

import { useState } from 'react';
import { useEffect } from 'react';

let slidesToShow = 5;
const PreviousBtn = (props) => {
  console.log(props);
  const { onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div  onClick={onClick}>
        
        </div>
      )}
    </>
  );
};
const NextBtn = (props) => {
  const {  onClick, slideCount, currentSlide } = props;
  console.log(props);
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div onClick={onClick}>
        
        </div>
      )}
    </>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: slidesToShow,
  slidesToScroll: 2,
  infinite: false,
  // slidesToScroll={3}
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const Cdr = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  if (width <= 426) {
    slidesToShow = 1;
  } else if (width > 426 && width <= 769) {
    slidesToShow = 3;
  } else if (width > 769 && width <= 1025) {
    slidesToShow = 4;
  } else {
    slidesToShow = 5;
  }

  return (
    <div style={{ margin: '30px' }} className='carousel'>
        <div className='words'>
      <h4>Classified </h4>
      <h4> products on </h4>
      <h4> the week </h4>
      
      </div>
      <div className='btngroup'>
      
      <PreviousBtn />
      <i class="fa-solid fa-chevron-right ther"></i>
      <i class="fa-solid fa-chevron-left"></i>
       <NextBtn />
      
       </div>
      
      <div className='things'>
      <Slider {...carouselProperties}>
        {data.map((item) => (
          <Card item={item} />
        ))}
        
      </Slider>
      </div>
      <Button className='explore'  size="lg"> Explore <i class="fa-solid fa-chevron-right"></i>
        </Button>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div className='thecard' style={{ textAlign: 'center' }}>
        <div className='theimg'>
      <img
        className='multi__image'
        src={item.image}
        alt=''
        style={{
          width: '100%',
          height: '170px',
        "border-radius":"20%",
          objectFit: 'contain',
          marginBottom: '10px',
        
        }}
      />
      </div>
      <p className='bhead' style={{ fontSize: '14px',fontWeight:"bold" }}>{item.title}</p>
      <div className='btmfont'>
        <h6 className='text-primary'>{item.price}</h6>
      <p style={{ fontSize: '10px', color: 'gray' }}>
      <i class="fa-solid fa-location-dot"></i> capehadstone
      </p>
      </div>
    </div>
  );
};

export default Cdr;
