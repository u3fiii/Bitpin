import { Swiper, SwiperSlide } from "swiper/react";

import banner1 from "../../assets/img/banner1.png";
import banner2 from "../../assets/img/banner2.png";
import banner3 from "../../assets/img/banner3.png";
import banner4 from "../../assets/img/banner4.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import Autoplay styles

import "../../styles/homepage/banner-swiper.scss";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function BannerSwiper() {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }} // Enable clickable pagination
        modules={[Pagination, Autoplay]} // Include Autoplay module
        loop={true} // Enable looping of slides
        className="mySwiper"
        centeredSlides={true}
        slidesPerView={1.15} // Show slightly more than one slide
        spaceBetween={12} // Space between slides
        autoplay={{
          delay: 3000, // Delay between transitions (in milliseconds)
          disableOnInteraction: false, // Continue autoplay after user interactions
        }}
      >
        <SwiperSlide>
          <img src={banner1} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={banner2} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={banner3} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={banner4} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
