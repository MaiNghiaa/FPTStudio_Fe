import React from "react";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function FooterGallery() {
  return (
    <div className="footer__gallery-inner">
      <div className="section__gallery-title mb-[24px]">
        <p className="font-[500] text-[24px] leading-[32px] text-[#f8f9fa] text-center">
          Hình ảnh hệ thống F.Studio
        </p>
      </div>
      <div className="footer__gallery-main">
        <Swiper
          effect={"coverflow"}
          spaceBetween={40}
          slidesPerView={3}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="http://localhost:3000/assets/images/Store/Gallery1.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="http://localhost:3000/assets/images/Store/Gallery2.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="http://localhost:3000/assets/images/Store/Gallery3.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="http://localhost:3000/assets/images/Store/Gallery4.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="http://localhost:3000/assets/images/Store/Gallery5.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
