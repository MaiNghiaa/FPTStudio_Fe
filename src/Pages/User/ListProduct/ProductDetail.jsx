import axios from "axios";
import React, { useEffect, useState, Suspense } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import "swiper/css/thumbs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css/scrollbar";
import { formatCash, getQuantity } from "../../../Utils/utils";

import "./ProductDetail.css";

const ProductSpecs = React.lazy(() =>
  import("../../../Components/User/ProductSpecs")
);
const ProductDetailSection = React.lazy(() =>
  import("../../../Components/User/ProductDetailSection")
);
export default function ProductDetail() {
  const [headingData, setHeadingData] = useState(null);
  const [descriptionData, setDescriptionData] = useState(null);
  const { Product, Detail } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const RomMin = searchParams.get("RomMin");
  const ColorDefault = searchParams.get("ColorDefault");
  const [DetailItem, setDetailItem] = useState(null);
  const [ComboPricing, setComboPricing] = useState(0);
  const [OldComboPricing, setOldComboPricing] = useState(0);
  const [ColorPick, setColorPick] = useState();
  const [Rom, setRom] = useState(RomMin);
  const [NameComboPricing, setNameComboPricing] = useState(
    "Bảo hành 1 năm cơ bản"
  );
  const [totalQuantity, setTotalQuantity] = useState(0);

  const [TotalPricing, setTotalPricing] = useState(0);
  const [OldPrice, setOldPrice] = useState(0);
  const [DataImg, setDataImg] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [formData, setFormData] = useState({
    Name: "",
    Phone: "",
    Email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const fetchData = async () => {
      try {
        const [DetailItemResponse, moreDetails] = await Promise.all([
          axios.get(
            `http://localhost:3000/${Product}/${Detail}?RomMin=${RomMin}&ColorDefault=${ColorDefault}`
          ),
          axios.get(`http://localhost:3000/${Product}/${Detail}/MoreDetail`),
        ]);

        setDetailItem(DetailItemResponse.data);
        setDataImg(DetailItemResponse.data.CaptionImg[0].image_caption_URL);
        setHeadingData(moreDetails.data.headingData);
        setDescriptionData(moreDetails.data.descriptionData);
        setColorPick(ColorDefault);
      } catch (error) {
        console.error("There was an error!", error);
      }
    };

    fetchData();
  }, []);
  console.log(DetailItem);
  const handleSubmitFormInfo = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/NotiItems", formData)
      .then((response) => {
        toast.success("Form Data Submitted Successfully!");
        console.log("Form Data Submitted", response.data);
        setFormData({
          Name: "",
          Phone: "",
          Email: "",
        });
      })
      .catch((error) => {
        toast.error("There was an error submitting the form!", error);
        console.error("There was an error submitting the form!", error);
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleColorClick = (colorName) => {
    setColorPick(colorName);

    const updatedDetailItem = {
      ...DetailItem,
      ColorDefault: colorName,
      Quantity: getQuantity(DetailItem.RomMin, colorName, DetailItem), // Cập nhật quantity
    };

    setDetailItem(updatedDetailItem);
  };

  const handleRomClick = (RomName) => {
    setRom(RomName);
    const updatedDetailItem = {
      ...DetailItem,
      RomMin: RomName,
      Quantity: getQuantity(RomName, DetailItem.ColorDefault, DetailItem), // Cập nhật quantity
    };

    setDetailItem(updatedDetailItem);
  };

  const handleItemClick = (value, oldvalue, name) => {
    setComboPricing(value);
    setOldComboPricing(oldvalue);
    setNameComboPricing(name);
  };
  useEffect(() => {
    const calculateTotalPrice = () => {
      if (DetailItem && DetailItem.DataPricing) {
        const matchedDetail = DetailItem.DataPricing.flatMap(
          (item) => item.DetailCR
        ).find((detail) => detail.Color_name === DetailItem.ColorDefault);

        if (matchedDetail) {
          const totalPrice =
            ComboPricing + parseFloat(matchedDetail.price.toString());
          const oldtotalPrice =
            ComboPricing + parseFloat(matchedDetail.OldPrice);
          setTotalPricing(totalPrice);
          setOldPrice(oldtotalPrice);
        }
      }
    };

    calculateTotalPrice();
  }, [ComboPricing, DetailItem]);
  // console.log(DetailItem);
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setTotalQuantity(total);
    localStorage.setItem("totalQuantity", total);
  }, []);
  const handleBuy = (e) => {
    e.preventDefault();
    if (!DataImg) {
      console.error("DataImg is not loaded yet");
      return;
    }
    console.log(Rom);
    // console.log(ColorPick);
    // console.log(DataImg);
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    let found = false;
    // const imgURL = document.getElementById("#imgURL").value;
    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    for (let i = 0; i < cartItems.length; i++) {
      if (
        cartItems[i].detail === Detail &&
        cartItems[i].rom === Rom &&
        cartItems[i].comboPricing === ComboPricing &&
        cartItems[i].nameComboPricing === NameComboPricing &&
        cartItems[i].ColorPick === ColorPick
      ) {
        cartItems[i].quantity += 1;
        found = true;
        break;
      }
    }

    if (!found) {
      const newItem = {
        detail: Detail,
        totalPrice: TotalPricing,
        oldPrice: OldPrice,
        rom: Rom,
        ImgURL: DataImg,
        ColorPick: ColorPick,
        oldComboPricing: OldComboPricing,
        comboPricing: ComboPricing,
        nameComboPricing: NameComboPricing,
        quantity: 1,
      };
      // const foundProduct = DetailItem.DataPricing.find(
      //   (item) =>
      //     item.DetailCR.some(
      //       (detail) => detail.Color_name === ColorPick
      //       // detail
      //     ) && Rom === item.Rom
      // );
      // console.log(foundProduct);
      // if (
      //   foundProduct &&
      //   DetailItem.DetailCate === Detail &&
      //   newItem.quantity <= foundProduct.Quantity
      // ) {
      //   cartItems.push(newItem);
      // } else {
      //   console.error("Số lượng vượt quá số lượng trong kho!");
      //   return;
      // }

      console.log("Đã thêm sản phẩm mới vào giỏ hàng:", newItem);
    }
    const totalQuantity = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    localStorage.setItem("totalQuantity", totalQuantity);
    console.log("Đã thêm sản phẩm mới vào giỏ hàng:", cartItems);

    localStorage.setItem("cart", JSON.stringify(cartItems));
    console.log(cartItems);
  };

  return (
    <div>
      <div className=" bg-[#ffffff] pb-12 shadow-[0_1px_4px_rgba(10,10,10,.15)]">
        <div className="contai halfsm:px-[10px] w-full max-w-[1200px] px-[12px] mx-auto ">
          <ToastContainer />

          <ol className="breadcrumb py-[6px] px-0 flex list-none mb-[8px]">
            <li className="breadcrumb-item h-5 text-[#444b52] text-[14px] leading-5">
              <a href="/" className="text-[#0664f9] relative inline-block">
                Trang chủ
              </a>
            </li>
            {Detail ? (
              <li className="breadcrumb-item2  h-5 text-[#0664f9] text-[14px] leading-5">
                {Product}
              </li>
            ) : (
              <li className="breadcrumb-item2  h-5 text-[#444b52] text-[14px] leading-5">
                {Product}
              </li>
            )}
          </ol>
          <div className="row flex flex-wrap mr-[calc(24px/-2)] ml-[calc(24px/-2)]">
            <div className="col-6 flex-[0_0_50%] max-w-[50%] px-3">
              <div className="slider-gallery top-[10px] sticky">
                <div className="slider-gallery__main mb-3">
                  <Swiper
                    style={{
                      "--swiper-navigation-color": "#cccccc",
                      "--swiper-pagination-color": "#cb1c22",
                      paddingBottom: "45px",
                    }}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs, Pagination]}
                    className="mySwiper2"
                    pagination={true}
                  >
                    {DetailItem &&
                      DetailItem.DataImg &&
                      DetailItem.DataImg.map((img, index) => (
                        <SwiperSlide className="swiper-slide" key={index}>
                          <picture className="block overflow-hidden relative w-full pt-[calc((.74653*100%)+0px)]">
                            <img
                              className=""
                              src={`http://localhost:3000/assets/${img.ImageURL}`}
                              alt={Product}
                            />
                          </picture>
                          {/* <input
                              type="text"
                              id="imgURL"
                              hidden
                              value={`http://localhost:3000/assets/${img.ImageURL}`}
                            /> */}
                        </SwiperSlide>
                      ))}
                  </Swiper>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={7}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                  >
                    {DetailItem &&
                      DetailItem.DataImg &&
                      DetailItem.DataImg.map((img, index) => (
                        <SwiperSlide className="swiper-slide" key={index}>
                          <picture className="block overflow-hidden relative w-full pt-[calc((.74653*100%)+0px)]">
                            <img
                              className=""
                              src={`http://localhost:3000/assets/${img.ImageURL}`}
                              alt={Product}
                            />
                          </picture>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="col-6 flex-[0_0_50%] max-w-[50%] px-3">
              <div>
                {/* {DetailItem && } */}

                {/* {Cate_name} */}
                {DetailItem && DetailItem.DetailCate ? (
                  <h1 className="text-[36px] leading-[48px] text-[32px] leading-8 font-medium mb-3">
                    {DetailItem.DetailCate}{" "}
                    {DetailItem.ColorDefault == null
                      ? " "
                      : DetailItem.ColorDefault + " "}
                    {DetailItem.RomMin == null ? " " : DetailItem.RomMin + " "}
                  </h1>
                ) : (
                  <p>load</p>
                )}

                <div className="npi-border border-[#0664f9] px-3 pt-3 pb-6 border-solid rounded-[0px_0px_6px_6px]">
                  {DetailItem && DetailItem.DataPricing
                    ? DetailItem.DataPricing.map((item, index) => {
                        const matchedDetail = item.DetailCR.find(
                          (detail) =>
                            detail.Color_name === DetailItem.ColorDefault
                        );

                        if (matchedDetail && item.Rom === DetailItem.RomMin) {
                          return (
                            <div
                              key={index}
                              className="price min-h-[40px] mb-4 flex justify-between items-center"
                            >
                              <div className="box-price flex items-center">
                                <span className="text-[32px] leading-[40px] font-medium text-[#cb1c22]">
                                  {formatCash(TotalPricing.toString())}đ
                                </span>
                                <strike className="text-promo text-[#939ca3] text-[24px] leading-8 pl-2 font-normal">
                                  {formatCash(OldPrice.toString())}đ
                                </strike>
                              </div>
                            </div>
                          );
                        } else {
                          return null;
                        }
                      })
                    : ""}

                  <div className="mb-4 flex rounded-md overflow-hidden">
                    {DetailItem && DetailItem.DataPricing
                      ? DetailItem.DataPricing.map((item, index) => (
                          <a
                            href="# "
                            key={index}
                            className={` flex-[1] inline-flex flex-col items-center py-[6px] px-0 transition-[all_.3s_ease] text-[#444b52] item ${
                              item.Rom === DetailItem.RomMin
                                ? "active bg-[#edeeef]"
                                : "bg-[#f8f9fa]"
                            }`}
                            onClick={() => handleRomClick(item.Rom)}
                          >
                            <div className="radio flex items-center pointer-events-none m-0 font-medium">
                              <input
                                id={`group-${index}`}
                                type="radio"
                                defaultValue={0}
                                name={`group-${index}`}
                                selected
                                className="m-[0_4px_0_0] rounded-none outline-none"
                              />
                              <label
                                htmlFor={`group-${index}`}
                                className="font-normal text-[14px] leading-[20px]"
                              >
                                {item.Rom}
                              </label>
                            </div>
                            {DetailItem && DetailItem.DataPricing
                              ? DetailItem.DataPricing.map((item, index) => {
                                  const matchedDetail = item.DetailCR.find(
                                    (detail) =>
                                      detail.Color_name ===
                                      DetailItem.ColorDefault
                                  );

                                  if (
                                    matchedDetail &&
                                    item.Rom === DetailItem.RomMin
                                  ) {
                                    return (
                                      <p className="text-[14px] leading-5 font-normal mb-0 text-[#444b52]">
                                        {formatCash(TotalPricing.toString())}đ
                                      </p>
                                    );
                                  } else {
                                    return null;
                                  }
                                })
                              : ""}
                          </a>
                        ))
                      : ""}
                  </div>
                </div>
                <div className="colors mb-5">
                  {DetailItem && DetailItem.DataPricing ? (
                    DetailItem.DataPricing.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className=" grid grid-cols-[118px_118px_118px_118px] gap-x-[calc(24px-2px)] gap-y-4"
                        >
                          {item.Rom === DetailItem.RomMin &&
                            item.DetailCR.map((detail, idx) => {
                              return (
                                <div
                                  key={idx}
                                  className={`item grid justify-items-center gap-1 p-[12px_7px_8px_7px] cursor-pointer relative ${
                                    detail.Color_name ===
                                    DetailItem.ColorDefault
                                      ? "border-[#4391fb] border-[2px] rounded-[6px]"
                                      : "border-[#edeeef]"
                                  }`}
                                  onClick={() => {
                                    handleColorClick(detail.Color_name);
                                  }}
                                >
                                  <span
                                    style={{
                                      backgroundColor: `${detail.color}`,
                                    }}
                                    className={` w-7 h-7 rounded-[50%] shadow-[inset_0_2px_2px_rgba(0,0,0,.15)] inline-block relative`}
                                  ></span>
                                  <div className="text-[16px] leading-6 font-normal text-center">
                                    {detail.Color_name}
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      );
                    })
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
                {/* Neu ma quantity !== 0  */}
                {DetailItem &&
                DetailItem.category === "iphone" &&
                DetailItem.Quantity !== 0 ? (
                  <div>
                    <div className="warranty mb-4">
                      <div className="title text-[16px] leading-6 font-medium text-[#32373d] mb-1">
                        Chọn gói bảo hành
                      </div>
                      <div className="list flex flex-wrap gap-3">
                        <div
                          onClick={() =>
                            handleItemClick(0, 0, "Bảo hành 1 năm cơ bản")
                          }
                          className={`${
                            ComboPricing === 0
                              ? "item dataCombo active focus:border-[#4391fb]"
                              : ""
                          } relative flex flex-col justify-center py-1 px-2 rounded-md border-[1px] border-solid border-[#e1e4e6] basis-[calc(100%/2-6px)] cursor-pointer overflow-hidden focus:border-[#4391fb]"`}
                        >
                          <div className="item-row flex items-end">
                            <span className="txt font-medium text-[14px] leading-[20px] text-[#444b52]">
                              Bảo hành 1 năm cơ bản
                            </span>
                          </div>
                          <div className="item-row flex items-end">
                            <div className="item-row"></div>
                          </div>
                        </div>
                        <div
                          onClick={() =>
                            handleItemClick(
                              500000,
                              2000000,
                              "Bảo hành 2 năm cơ bản"
                            )
                          }
                          className={`${
                            ComboPricing === 500000
                              ? "item dataCombo active focus:border-[#4391fb]"
                              : ""
                          } relative flex flex-col justify-center py-1 px-2 rounded-md border-[1px] border-solid border-[#e1e4e6] basis-[calc(100%/2-6px)] cursor-pointer overflow-hidden item focus:border-[#4391fb]`}
                        >
                          <div className="item-row flex items-end">
                            <span className="txt font-medium text-[14px] leading-[20px] text-[#444b52]">
                              Bảo hành 2 năm cơ bản
                            </span>
                          </div>
                          <div className="item-row flex items-end">
                            <span className="item-price text-[16px] leading-6 font-medium text-[#cb1c22]">
                              +{formatCash("500000")}đ
                            </span>
                            <strike className="text-[14px] leading-5 ml-2 py-[2px] px-0">
                              {formatCash("2000000")}đ
                            </strike>
                          </div>
                        </div>
                        <div
                          onClick={() =>
                            handleItemClick(
                              700000,
                              2000000,
                              "Đặc quyền Đổi mới 12 tháng"
                            )
                          }
                          className={`${
                            ComboPricing === 700000
                              ? "item dataCombo active focus:border-[#4391fb]"
                              : ""
                          } relative flex flex-col justify-center py-1 px-2 rounded-md border-[1px] border-solid border-[#e1e4e6] basis-[calc(100%/2-6px)] cursor-pointer overflow-hidden item focus:border-[#4391fb]`}
                        >
                          <div className="item-row flex items-end">
                            <span className="txt font-medium text-[14px] leading-[20px] text-[#444b52]">
                              Đặc quyền Đổi mới 12 tháng
                            </span>
                          </div>
                          <div className="item-row flex items-end">
                            <span className="item-price text-[16px] leading-6 font-medium text-[#cb1c22]">
                              +{formatCash("700000")}đ
                            </span>
                            <strike className="text-[14px] leading-5 ml-2 py-[2px] px-0">
                              {formatCash("2000000")}đ
                            </strike>
                          </div>
                        </div>
                        <div
                          onClick={() =>
                            handleItemClick(
                              1200000,
                              4000000,
                              "Bảo hành 2 năm + Đổi mới 12 tháng"
                            )
                          }
                          className={`${
                            ComboPricing === 1200000
                              ? "item dataCombo active focus:border-[#4391fb]"
                              : ""
                          }relative flex flex-col justify-center py-1 px-2 rounded-md border-[1px] border-solid border-[#e1e4e6] basis-[calc(100%/2-6px)] cursor-pointer overflow-hidden item focus:border-[#4391fb]`}
                        >
                          <div className="item-row flex items-end">
                            <span className="txt font-medium text-[14px] leading-[20px] text-[#444b52]">
                              Bảo hành 2 năm + Đổi mới 12 tháng
                            </span>
                          </div>
                          <div className="item-row flex items-end">
                            <span className="item-price text-[16px] leading-6 font-medium text-[#cb1c22]">
                              +{formatCash("1200000")}đ
                            </span>
                            <strike className="text-[14px] leading-5 ml-2 py-[2px] px-0">
                              {formatCash("4000000")}đ
                            </strike>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="combo-accessory mb-4 rounded-md border-[1px] border-solid border-[##edeeef] bg-[#f8f9fa] overflow-hidden"></div>
                    <button
                      className="btn btn-link w-full text-[20px] leading-5 mb-2"
                      onClick={handleBuy}
                    >
                      Mua ngay
                    </button>
                  </div>
                ) : (
                  <div className="mb-4">
                    <div className="out-of-stock form-group">
                      <div className="form-head">
                        <div className="form-title">HÀNG SẮP VỀ</div>
                        <div className="form-subtitle">
                          Đăng ký nhận thông báo mới nhất về{" "}
                          {DetailItem && DetailItem.DetailCate ? (
                            <strong>
                              {DetailItem.DetailCate}{" "}
                              {DetailItem.ColorDefault == null
                                ? " "
                                : DetailItem.ColorDefault + " "}
                              {DetailItem.RomMin == null
                                ? " "
                                : DetailItem.RomMin + " "}
                            </strong>
                          ) : (
                            " "
                          )}
                        </div>
                      </div>
                      <div className="form-body">
                        <form
                          id="receiveEmail"
                          onSubmit={handleSubmitFormInfo}
                          action
                        >
                          <div className="form-content">
                            <div className="info flex w-full justify-between mb-2">
                              <div className="info-item">
                                <input
                                  type="text"
                                  placeholder="Nhập họ và tên"
                                  id="Name"
                                  name="Name"
                                  value={formData.Name}
                                  onChange={handleChange}
                                />
                                <div
                                  className="error errname"
                                  style={{ display: "none" }}
                                >
                                  <div className="text errorname">
                                    Thông tin bắt buộc
                                  </div>
                                </div>
                              </div>
                              <div className="info-item">
                                <input
                                  type="text"
                                  id="Phone"
                                  name="Phone"
                                  placeholder="Nhập số điện thoại"
                                  value={formData.Phone}
                                  onChange={handleChange}
                                  data-showerr=".errphone"
                                  data-placeerror=".errorphone"
                                />
                                <div
                                  className="error errphone"
                                  style={{ display: "none" }}
                                >
                                  <div className="text errorphone">
                                    Thông tin bắt buộc
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="email">
                              <div className="info-item">
                                <input
                                  type="text"
                                  placeholder="Nhập email (không bắt buộc)"
                                  id="Email"
                                  name="Email"
                                  value={formData.Email}
                                  onChange={handleChange}
                                  data-showerr=".errmail"
                                  data-placeerror=".erroremail"
                                />
                                <div
                                  className="error  errmail"
                                  style={{ display: "none" }}
                                >
                                  <div className="text erroremail">
                                    Thông tin bắt buộc
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-submit text-center mt-6">
                            <button
                              className="btn btn-link btn-signup"
                              type="submit"
                            >
                              ĐĂNG KÝ
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
                <div className="f-s-ui-14 text-center text-[14px] leading-[14px]">
                  Gọi
                  <a
                    className="text-[#0664f9] inline-block relative font-medium px-[4px]"
                    href="tel:18006601"
                  >
                    {" "}
                    1800 6601{" "}
                  </a>
                  để được tư vấn mua hàng (Miễn phí)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cac phu kien khac */}
      <div className="detail_body">
        <div className="product-related mt-12">
          <div className=" halfsm:px-[10px] w-full max-w-[1200px] px-[12px] mx-auto ">
            <div className="card rounded-md block shadow-[0_1px_4px_rgba(10,10,10,.15)] bg-[#fff]">
              <div className="card-body pb-4">
                <div className="row flex flex-wrap mx-0">
                  <div className="col-12 px-0 flex-[0_0_100%] max-w-full">
                    <div className="product-related__heading py-4 px-5">
                      <div className="h4 text-[20px] font-medium leading-7">
                        Các phụ kiện khác
                      </div>
                    </div>
                  </div>
                  {DetailItem &&
                    DetailItem.DataPk &&
                    DetailItem.DataPk.map((Items, index) => {
                      return (
                        <div
                          key={index}
                          className="flex-[0_0_25%] max-w-[25%] sm:flex-[0_0_50%] sm:max-w-[50%] xs:flex-[0_0_100%] xs:max-w-full"
                        >
                          <div className="item grid gap-4 p-3 sm:gap-2 py-0 px-2">
                            <Link
                              to={`/phu-kien/${Items.product_name}`}
                              className="item__img h-[210px] text-center sm:h-[154px]"
                            >
                              <img
                                className="h-full w-auto"
                                src={`http://localhost:3000/assets/${Items.image_caption_URL}`}
                                alt=""
                              />
                            </Link>
                            <div className="item__info grid gap-[8px]">
                              <Link to={`/phu-kien/${Items.product_name}`}>
                                <div className="item__name text-[18px] leading-6 font-medium text-[#32373d] overflow-hidden sm:text-[14px] sm:leading-5 sm:font-medium">
                                  {Items.product_name}
                                </div>
                              </Link>
                              <div className="item__price flex items-center gap-2 sm:flex-col sm:items-start sm:gap-0">
                                <div className="text text-primary text-[18px] leading-6 font-medium text-[#cb1c22] sm:text-[14px] sm:leading-5 sm:font-medium">
                                  {formatCash(Items.CaptionPrice)} đ
                                </div>
                                {formatCash(Items.OldPrice) !== 0 && (
                                  <strike className="text text-grayscale text-[#939ca3] text-[14px] leading-5">
                                    {formatCash(Items.OldPrice)} đ
                                  </strike>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Suspense>
          <>
            {/* Render other lazy-loaded components */}
            <ProductSpecs DetailItem={DetailItem} />
            <ProductDetailSection
              headingData={headingData}
              descriptionData={descriptionData}
            />
          </>
        </Suspense>
      </div>
    </div>
  );
}
