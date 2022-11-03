import React from 'react'
import Banner from '../component/Banner/Banner';

import Head from '../component/Head';
import BestDeals from '../component/BestDeals/BestDeals';
import Classified from '../component/classifiedProducts/Classified';
import Recommend from '../component/Recommended/Recommend';
import FlashSale from '../component/FlashSale/FlashSale';
import HotSale from '../component/HotSale/HotSale';
import Grid from '../component/Grid/Grid';
import RecentlyViewed from '../component/RecentlyViewed/RecentlyViewed';
import Footer from '../component/Footer/Footer';

function Home(Pno) {
  return (
    <div>
           <Head/>
      <Banner/>
      <BestDeals/>
      <Classified />
      <Recommend/>
      <FlashSale/>
      <HotSale Pno={Pno}/>
      <Grid/>
      <RecentlyViewed/>
      <Footer/>
      
    </div>
  )
}

export default Home
