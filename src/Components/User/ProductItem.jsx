import React, { useState } from "react";
import { Link } from "react-router-dom";

function formatCash(input) {
  if (!Array.isArray(input) && typeof input !== "string") {
    return input;
  }
  const cashArray = Array.isArray(input) ? input : input.split("");
  if (cashArray.length === 0) {
    return 0;
  }
  return cashArray.reverse().reduce((prev, next, index) => {
    return (index % 3 ? next : next + ",") + prev;
  }, "");
}

// const test = "Ip15pr_Ip15prm.webp";
const ProductItem = React.memo(function ProductItem({
  product,
  index,
  type,
  ColorDefault,
  MinRom,
  // colors,
}) {
  // console.log(MinRom, ColorDefault);

  return (
    <div
      key={index}
      className="product-item h-[534px] bg-[#fff] rounded-none pt-[24px] pb-[32px] px-[12px] flex flex-col basis-[calc(100%/3)] border-[1px] border-[#edeeef] border-t-0 border-l-0"
    >
      <div className="product-item-img h-[240px] px-[30px] mb-[16px] relative text-center">
        <Link
          to={`/${type}/${product.product_name}?RomMin=${MinRom}&ColorDefault=${ColorDefault}`}
        >
          <img
            className="w-[307px] h-[240px] object-contain transition-[all_.3s_ease]"
            src={`http://localhost:3000/assets/${product.image_caption_URL}`}
            // /images/List/Items/

            alt=""
          />
        </Link>
      </div>
      <div className="product-item-info flex flex-col items-center gap-[8px]">
        <div className="product-color flex gap-3 mb-4 justify-center">
          {product.colors &&
            [...new Set(product.colors.split(","))].map((color, index) => (
              <span
                style={{
                  backgroundColor: `${color}`,
                }}
                key={index}
                className={`rounded-[50%] shadow-[0_1px_1px_rgba(0,0,0,.15)] w-4 h-4`}
              ></span>
            ))}
        </div>

        <Link
          to={`/${type}/${product.product_name}?RomMin=${MinRom}&ColorDefault=${ColorDefault}`}
        >
          <h3 className="product_name text-[20px] leading-[28px] font-medium text-center overflow-hidden text-[#32373d]">
            {product.product_name}
          </h3>
        </Link>
        <div className="product-price flex gap-2 items-end justify-center m-0">
          <div className="text text-[16px] font-normal leading-[24px] text-[#444b52]">
            Giá chỉ
          </div>
          <div className="price text-[20px] leading-7 font-medium text-[#cb1c22]">
            {formatCash(product.MaxCaptionPrice)} đ
          </div>
          {formatCash(product.OldPrice) !== 0 && (
            <strike className="oldPrice text-[#939ca3] text-[16px] leading-6 font-normal">
              {formatCash(product.OldPrice)} đ
            </strike>
          )}
        </div>
      </div>
      <div className="product-item-detail flex flex-[1] mt-4 justify-center items-start">
        <Link
          to={`/${type}/${product.product_name}?RomMin=${MinRom}&ColorDefault=${ColorDefault}`}
          className="w-[176px] text-[#6a737a] border border-[#cbd1d6] bg-[#ffffff] h-[32px] px-[12px] text-[16px] leading-4 inline-flex items-center justify-center flex-col select-none transition-[all_.3s_cubic-bezier(0,0,.4,1)] pointer self-end mb-[46px]"
        >
          XEM CHI TIẾT
        </Link>
      </div>
    </div>
  );
});

export default ProductItem;
