import React from "react";

export default function Footer() {
  return (
    <div className="footer text-white">
      <div className="footer-top bg-[#444b52] py-[22px]">
        <div className="footer__container w-[100%] px-[12px] mx-auto max-w-[1200px]">
          <ul className="flex justify-center gap-12">
            <li className="flex gap-2">
              <img
                src="http://localhost:3000/assets/images/icons/like.png"
                alt=""
                className="icon w-[48px] h-[48px]"
              />
              <div className="footer__group-text flex flex-col justify-start items-start">
                <div className="title text-white text-[16px] leading-[24px] font-medium">
                  Thương hiệu đảm bảo
                </div>
                <div className="desc text-[#e1e4e6] text-[14px] leading-[20px] font-normal">
                  Sản phẩm chính hãng Apple
                </div>
              </div>
            </li>
            <li className="flex gap-2">
              <img
                src="http://localhost:3000/assets/images/icons/shield.png"
                alt=""
                className="icon w-[48px] h-[48px]"
              />

              <div className="footer__group-text flex flex-col justify-start items-start">
                <div className="title text-white text-[16px] leading-[24px] font-medium">
                  Bảo hành chính hãng
                </div>
                <div className="desc text-[#e1e4e6] text-[14px] leading-[20px] font-normal">
                  Bảo hành theo chính sách Apple
                </div>
              </div>
            </li>
            <li className="flex gap-2">
              <img
                src="http://localhost:3000/assets/images/icons/shield.png"
                alt=""
                className="icon w-[48px] h-[48px]"
              />

              <div className="footer__group-text flex flex-col justify-start items-start">
                <div className="title text-white text-[16px] leading-[24px] font-medium">
                  Giao hàng tận nơi
                </div>
                <div className="desc text-[#e1e4e6] text-[14px] leading-[20px] font-normal">
                  Tại 63 tỉnh thành
                </div>
              </div>
            </li>
            <li className="flex gap-2">
              <img
                src="http://localhost:3000/assets/images/icons/crown.png"
                alt=""
                className="icon w-[48px] h-[48px]"
              />

              <div className="footer__group-text flex flex-col justify-start items-start">
                <div className="title text-white text-[16px] leading-[24px] font-medium">
                  Trải nghiệm Premium
                </div>
                <div className="desc text-[#e1e4e6] text-[14px] leading-[20px] font-normal">
                  Không gian trải nghiệm cao cấp
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-middle bg-[#32373d] ">
        <div className="footer__container w-[100%] px-[12px] mx-auto max-w-[1200px]">
          <div className="footer-form py-[16px] px-[147px] flex items-center leading-6 text-[16px] font-medium border-b-[1px] border-b-[#444b52]">
            <div className="form-footertext text-[#e1e4e6] mr-12 text-[14px] font-normal">
              Đăng ký ngay để nhận thông tin mới nhất về Apple
            </div>
            <div className="form-footer ">
              <div className="form-group">
                <form>
                  <input
                    className="border-1 border-[#939ca3] outline-none w-[376px] py-[5px] px-[11px] mr-[8px] color-[#444b52] text-[14px] font-normal rounded-sm"
                    name="Email"
                    id="Email"
                    type="email"
                    placeholder="Nhập email của bạn tại đây"
                    aria-required="true"
                    aria-describedby="Email-error"
                    aria-invalid="true"
                  />
                  <button
                    className="bg-[#044dd6] border-1 border-[#044dd6] text-white h-[32px] px-[16.5px] inline-flex items-center justify-center"
                    type="submit"
                    onClick={(e) => e.preventDefault()}
                  >
                    Đăng ký
                  </button>
                </form>
              </div>
              <div className="form-ertext"></div>
            </div>
          </div>
          <div className="footer-content py-6 flex justify-center">
            <div className="footer-info max-w-[376px]">
              <div className="info-hotline flex gap-[17px] mb-[12px]">
                <div className="items-hotline flex flex-col items-start ">
                  <div className="text-hotline text-[#e1e4e6] mb-[4px] flex text-[14px] leading-5 font-normal">
                    Tư vấn mua hàng
                  </div>
                  <a
                    className="font-medium text-[24px] leading-[100%]"
                    href="tel:1800 6601"
                  >
                    1800 6601
                  </a>
                </div>
                <div className="items-hotline flex flex-col items-start">
                  <div className="text-hotline text-[#e1e4e6] mb-[4px] flex text-[14px] leading-5 font-normal">
                    Chăm sóc khách hàng
                  </div>
                  <a
                    className="font-medium text-[24px] leading-[100%]"
                    href="tel:1800 6616"
                  >
                    1800 6616
                  </a>
                </div>
              </div>
              <div className="info-service">
                <div className="service-text text-[#edeeef] text-[14px] leading-5 font-medium mb-[4px] flex">
                  Dịch vụ và hỗ trợ:
                </div>
                <ul className="flex flex-col items-start list-disc">
                  <li className="text-left ml-[18px] text-[14px] leading-5 font-normal mb-[4px] ">
                    HCM: 121 Lê Lợi, Phường Bến Nghé, Quận 1, TP.HCM
                  </li>
                  <li className="text-left ml-[18px] text-[14px] leading-5 font-normal mb-[4px] ">
                    Hà Nội: 92 Hai Bà Trưng, P. Cửa Nam, Q. Hoàn Kiếm, TP. Hà
                    Nội
                  </li>
                  <li className="text-left ml-[18px] text-[14px] leading-5 font-normal mb-[4px] ">
                    Đà Nẵng: 240 Hoàng Diệu, Q. Hải Châu, TP. Đà Nẵng
                  </li>
                  <li className="text-left ml-[18px] text-[14px] leading-5 font-normal mb-[4px] ">
                    Cần Thơ: 52 - 54 - 56 Đường 30/4, P. An Phú, Q. Ninh Kiều,
                    Cần Thơ
                  </li>
                </ul>
              </div>
              <div className="img max-w-[140px] align-middle">
                <img
                  src="http://localhost:3000/assets/images/icons/item.png"
                  alt=""
                />
              </div>
            </div>

            <div className="footer-category flex gap-6 flex-1 justify-between ml-[124px]">
              <div className="footer-categoryItem flex flex-col items-start">
                <div className="CateItem-title text-[#edeeef] text-[14px] leading-5 font-medium mb-2">
                  Sản phẩm
                </div>
                <ul className="flex flex-col items-start">
                  <li className="flex mb-2 text-[#e1e4e6] text-[14px] leading-5">
                    <a href="\">iPhone</a>
                  </li>
                  <li className="flex mb-2 text-[#e1e4e6] text-[14px] leading-5">
                    <a href="\">iPad</a>
                  </li>
                  <li className="flex mb-2 text-[#e1e4e6] text-[14px] leading-5">
                    <a href="\">Mac</a>
                  </li>
                  <li className="flex mb-2 text-[#e1e4e6] text-[14px] leading-5">
                    <a href="\">Apple Watch</a>
                  </li>
                  <li className="flex mb-2 text-[#e1e4e6] text-[14px] leading-5">
                    <a href="\">Phụ kiện</a>
                  </li>
                </ul>
              </div>
              <div className="footer-categoryItem flex flex-col items-start">
                <div className="CateItem-title text-[#edeeef] text-[14px] leading-5 font-medium mb-2">
                  Chính sách
                </div>
                <ul className="flex flex-col items-start">
                  <li className="flex mb-2 text-[#e1e4e6] text-[14px] leading-5">
                    <a href="\">Chính sách bảo mật</a>
                  </li>
                  <li className="flex mb-2 text-[#e1e4e6] text-[14px] leading-5">
                    <a href="\">Chính sách đổi trả sản phẩm</a>
                  </li>
                  <li className="flex mb-2 text-[#e1e4e6] text-[14px] leading-5">
                    <a href="\">Chính sách bảo hành</a>
                  </li>
                  <li className="flex mb-2 text-[#e1e4e6] text-[14px] leading-5">
                    <a href="\">Chính sách giao nhận</a>
                  </li>
                </ul>
              </div>
              <div className="footer-categoryItem flex flex-col items-start">
                <div className="CateItem-title text-[#edeeef] text-[14px] leading-5 font-medium mb-2">
                  Về chúng tôi
                </div>
                <ul className="flex flex-col items-start">
                  <li className="flex mb-2 text-[#e1e4e6] text-[14px] leading-5">
                    <a href="\">Giới thiệu</a>
                  </li>
                  <li className="flex mb-2 text-[#e1e4e6] text-[14px] leading-5">
                    <a href="\">Tin tức-Thủ thuật</a>
                  </li>
                  <li className="flex mb-2 text-[#e1e4e6] text-[14px] leading-5">
                    <a href="\">Hệ thống cửa hàng</a>
                  </li>
                  <li className="flex mb-2 text-[#e1e4e6] text-[14px] leading-5">
                    <a href="\">Câu hỏi thường gặp</a>
                  </li>
                  <li className="flex mb-2 text-[#e1e4e6] text-[14px] leading-5">
                    <a href="\">Hướng dẫn mua hàng</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-[#444b52] py-[12px] text-center">
        <div className="footer__container w-[100%] px-[12px] mx-auto max-w-[1200px]">
          <p className=" text-[14px] leading-5 font-normal mb-[4px] ">
            Copyright 2007 - 2022 Công Ty Cổ Phần Bán Lẻ Kỹ Thuật Số FPT. GPĐKKD
            số 0311609355 do Sở KHĐT TP.HCM cấp ngày
          </p>
          <p className=" text-[14px] leading-5 font-normal mb-[4px] ">
            08/03/2012. GP số 48/GP-TTĐT do sở TTTT TP HCM cấp ngày 02/07/2018.
            Người quản lý nội dung: Vũ Đức Hải
          </p>
          <p className=" text-[14px] leading-5 font-normal mb-[4px] ">
            Apple, the Apple logo are trademark of Apple inc, registered in the
            US, and other countries
          </p>
        </div>
      </div>
    </div>
  );
}
