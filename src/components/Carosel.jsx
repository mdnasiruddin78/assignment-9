import React from 'react';
import ice1 from '../assets/ice1.jpg';
import ice3 from '../assets/ice3.jpg';
import ice4 from '../assets/ice4.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Carosel = () => {
    return (
        <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={ice1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={ice3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={ice4} alt="" /></SwiperSlide>
      </Swiper>
    </>
    );
};

export default Carosel;