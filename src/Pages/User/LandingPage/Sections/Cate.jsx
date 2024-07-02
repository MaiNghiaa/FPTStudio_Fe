import React from "react";
import { Link } from "react-router-dom";

import "./Cate.css";

export default function Cate() {
  return (
    <div className="List-cate flex gap-6 items-baseline">
      <div className="Cate__item pt-[24px] pb-[32px] bg-[#32373d] shadow-[0_0_16px_rgba(0,0,0,.7)] rounded-[6px]">
        <Link to="/iPhone" className="flex flex-col items-center">
          <p className="Cate__item-title text-[20px] leading-7 font-medium mb-[16px]">
            iPhone
          </p>
          <img
            className="cateimg"
            src="http://localhost:3000/assets/images/List/LandingPage/iphone_1.png"
            alt="iPhone"
          />
        </Link>
      </div>
      <div className="Cate__item pt-[24px] pb-[32px] bg-[#32373d] shadow-[0_0_16px_rgba(0,0,0,.7)] rounded-[6px]">
        <Link to="/iPad" className="flex flex-col items-center">
          <p className="Cate__item-title text-[20px] leading-7 font-medium mb-[16px]">
            iPad
          </p>
          <img
            className="cateimg"
            src="http://localhost:3000/assets/images/List/LandingPage/ipad.png"
            alt="iPad"
          />
        </Link>
      </div>
      <div className="Cate__item pt-[24px] pb-[32px] bg-[#32373d] shadow-[0_0_16px_rgba(0,0,0,.7)] rounded-[6px]">
        <Link to="/Mac" className="flex flex-col items-center">
          <p className="Cate__item-title text-[20px] leading-7 font-medium mb-[16px]">
            Mac
          </p>
          <img
            className="cateimg"
            src="http://localhost:3000/assets/images/List/LandingPage/mac_1.png"
            alt="Mac"
          />
        </Link>
      </div>
      <div className="Cate__item pt-[24px] pb-[32px] bg-[#32373d] shadow-[0_0_16px_rgba(0,0,0,.7)] rounded-[6px]">
        <Link to="/Apple_Watch" className="flex flex-col items-center">
          <p className="Cate__item-title text-[20px] leading-7 font-medium mb-[16px]">
            Apple Watch
          </p>
          <img
            className="cateimg"
            src="http://localhost:3000/assets/images/List//LandingPage/Apple-watch.png"
            alt="Apple Watch"
          />
        </Link>
      </div>
      <div className="Cate__item pt-[24px] pb-[32px] bg-[#32373d] shadow-[0_0_16px_rgba(0,0,0,.7)] rounded-[6px]">
        <Link to="/phu-kien" className="flex flex-col items-center">
          <p className="Cate__item-title text-[20px] leading-7 font-medium mb-[16px]">
            Phụ kiện
          </p>
          <img
            className="cateimg"
            src="http://localhost:3000/assets/images/List/LandingPage/airtag.png"
            alt="Phụ kiện"
          />
        </Link>
      </div>
    </div>
  );
}
