import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const Cart = () => {
    navigate("/cart");
  };
  const Donmua = () => {
    navigate("/dondadat");
  };
  return (
    <div className="Header small:max-w-[640px] small:w-full small:m-auto small:relative">
      <div className="Header_top bg-black py-5">
        <div className="flex items-center justify-center w-full max-w-[1200px] px-[12px] mx-auto ">
          <div className="header-logo max-w-[276px] flex-auto">
            <a href="\">
              <img
                src="https://fstudiobyfpt.com.vn/ContentV2/assets/img/logo-fstu-aar.png"
                alt=""
                className=""
              />
            </a>
          </div>
          <div className="header-search flex-1 bg-[rgba(255,255,255,.15)] mx-[125.953px] invisible">
            <form action className="">
              <div className="flex  border-none px-[16px] min-h-[28px] text-[#939ca3] w-[476px]">
                <span></span>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border-none outline-none bg-transparent text-[14px] leading-5 flex-1 mr-[8px] py-[1px] px-[2px]"
                  placeholder="Bạn đang tìm sản phẩm, tin tức, workshop..."
                />
              </div>
            </form>
          </div>
          <div className="header-cart flex-1  inline-flex items-center text-[#e1e4e6] py-[10px] pl-[24px] ">
            <div className="relative w-[30px] h-[30px] block" onClick={Cart}>
              <img
                src={`http://localhost:3000/assets/Icon/shopping-cart.png`}
                alt="Shopping Cart"
                className="w-full h-full"
              />
            </div>
            <div onClick={Donmua}>
              <p className="text-[14px] leading-5 ml-2 small:invisible small:hidden">
                Đơn mua
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bot bg-[#212529] flex justify-center items-center">
        <div className="wrapper w-[100%] max-w-[1200px] px-[12px] mx-[auto] flex items-center justify-center">
          <ul className="flex shink-0 big:flex-row small:flex-col small:hidden">
            <li className="flex justify-center items-center py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
              <Link to="/iphone" className="flex justify-center items-center">
                Iphone
              </Link>
            </li>
            <li className="flex justify-center items-center py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
              <Link to="/Ipad" className="flex justify-center items-center">
                Ipad
              </Link>
            </li>
            <li className="flex justify-center items-center py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
              <Link to="/Mac" className="flex justify-center items-center">
                Mac
              </Link>
            </li>
            <li className="flex justify-center items-center py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
              <Link
                to="/Apple_Watch"
                className="flex justify-center items-center"
              >
                Apple Watch
              </Link>
            </li>
            <li className="flex justify-center items-center py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
              <Link to="/phu-kien" className="flex justify-center items-center">
                Phụ kiện
              </Link>
            </li>
            {/* <li className="flex justify-center items-center py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
              <Link
                //  to="/tin-tuc"
                to="https://fstudiobyfpt.com.vn/tin-tuc"
                className="flex justify-center items-center"
              >
                Tin tức
              </Link>
            </li> */}
            <li className="flex justify-center items-center py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
              <Link to="/today" className="flex justify-center items-center">
                Workshop
              </Link>
            </li>
            {/* <li className="flex justify-center items-center py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px] text-[#f6c743] font-medium">
              <Link
                to="/khuyen-mai"
                className="flex justify-center items-center"
              >
                Khuyến mãi
              </Link>
            </li> */}
            <li className="flex justify-center items-center py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
              <Link to="/fcare" className="flex justify-center items-center">
                F.Care
              </Link>
            </li>
          </ul>

          <button className="phone-hotline ml-[52px] border-1 small:invisible small:hidden">
            <a
              href="tel:+84123456789"
              className="text-[#fff] bg-[#0664f9] outline-none px-[12px] h-[28px]  flex items-center justify-center w-full"
            >
              <img
                className="small:w-[16px] small:h-[16px] small:text-[16px]  mx-[2px] w-[16px] h-4"
                src={`http://localhost:3000/assets/Icon/icons8-phone.png`}
                alt=""
              />
              <span className="whitespace-nowrap small:inline-block text-[12px]">
                Gọi 1800 6601
              </span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
