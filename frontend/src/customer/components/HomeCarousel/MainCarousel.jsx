import React from 'react';
import { MainCarouselData } from './MainCarouselData';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';


const MainCarousel = () => {
    const items = MainCarouselData.map((item)=>  <img className='cursor-pointer -z-10 ' role='presentation' src={item.image} style={{ width: '100%',  height: '90vh' }}  alt=""/>);


   return (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
    />
   )
   };

export default MainCarousel;
