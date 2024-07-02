import axios from "axios";
import React, { useEffect, useState } from "react";

export default function News() {
  return (
    <div>
      <div className="list-news flex flex-row flex-wrap mx-[calc(24px/-2)]">
        <div className="news-items flex-[0_0_50%] max-w-[50%] mb-6 relative px-3 min-h-[1px]">
          <div className="card flex flex-col items-center h-[100%] rounded-[6px] bg-[#32373d] hover:bg-[#6a737a] hover:transition-[all_.3s_ease]">
            <div className="card-img ">
              <picture className="rounded-[6px_6px_0_0] block ">
                <img
                  className="w-[576px] h-[240px]"
                  src="http://localhost:3000/assets/images/Slider/banner2.png"
                  alt=""
                />
              </picture>
            </div>

            <div className="card-info px-[24px] min-h-[112px] shadow-[inset_0_1px_#32373d]">
              <a href="\" className="flex flex-col justify-center al h-[100%]">
                <div className="card-info-title text-center font-medium text-[24px] overflow-hidden">
                  Chương trình Workshop
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="news-items flex-[0_0_50%] max-w-[50%] mb-6 relative px-3 min-h-[1px]">
          <div className="card flex flex-col align-center h-[100%] rounded-[6px] bg-[#32373d] hover:bg-[#6a737a] hover:transition-[all_.3s_ease]">
            <div className="card-img ">
              <picture className="rounded-[6px_6px_0_0] block ">
                <img
                  className="w-[576px] h-[240px]"
                  src="http://localhost:3000/assets/images/Slider/banner3.jpg"
                  alt=""
                />
              </picture>
            </div>
            <div className="card-info px-[24px] min-h-[112px] shadow-[inset_0_1px_#32373d]">
              <a href="\" className="flex flex-col justify-center h-[100%]">
                <div className="card-info-title text-center font-medium text-[24px] overflow-hidden">
                  [MIỄN PHÍ] Workshop Shot on iPhone 15 - Dựng video chuyên
                  nghiệp cùng chuyên gia
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="news-items flex-[0_0_50%] max-w-[50%] mb-6 relative px-3 min-h-[1px]">
          <div className="card flex flex-col align-center h-[100%] rounded-[6px] bg-[#32373d] hover:bg-[#6a737a] hover:transition-[all_.3s_ease]">
            <div className="card-img ">
              <picture className="rounded-[6px_6px_0_0] block ">
                <img
                  className="w-[576px] h-[240px]"
                  src="http://localhost:3000/assets/images/Slider/banner3.jpg"
                  alt=""
                />
              </picture>
            </div>
            <div className="card-info px-[24px] min-h-[112px] shadow-[inset_0_1px_#32373d]">
              <a href="\" className="flex flex-col justify-center h-[100%]">
                <div className="card-info-title text-center font-medium text-[24px] overflow-hidden">
                  Chương trình khách hàng thân thiết
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="news-items flex-[0_0_50%] max-w-[50%] mb-6 relative px-3 min-h-[1px]">
          <div className="card flex flex-col align-center h-[100%] rounded-[6px] bg-[#32373d] hover:bg-[#6a737a] hover:transition-[all_.3s_ease]">
            <div className="card-img ">
              <picture className="rounded-[6px_6px_0_0] block ">
                <img
                  className="w-[576px] h-[240px]"
                  src="http://localhost:3000/assets/images/Slider/banner1.png"
                  alt=""
                />
              </picture>
            </div>
            <div className="card-info px-[24px] min-h-[112px] shadow-[inset_0_1px_#32373d]">
              <a href="\" className="flex flex-col justify-center h-[100%]">
                <div className="card-info-title text-center font-medium text-[24px] overflow-hidden">
                  Hướng dẫn thanh toán trên trang F.Studio
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
