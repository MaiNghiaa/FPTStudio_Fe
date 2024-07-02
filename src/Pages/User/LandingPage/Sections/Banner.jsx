import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const banners = [
  "http://localhost:3000/assets/images/Slider/banner1.png",
  "http://localhost:3000/assets/images/Slider/banner2.png",
  "http://localhost:3000/assets/images/Slider/banner3.jpg",
];
const Banner = () => {
  return (
    <div className="flex justify-between items-center">
      <Swiper
        className="flex justify-between items-center"
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <a href="/">
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                className="w-[100%]"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
