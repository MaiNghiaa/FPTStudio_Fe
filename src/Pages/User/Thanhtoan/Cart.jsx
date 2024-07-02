// src/Cart.js

import React, { useEffect, useState } from "react";
import { formatCash } from "../../../Utils/utils";
import "./Cart.css";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalinCart, setTotalinCart] = useState(0);
  const [totalProduct, settotalProduct] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");

  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];

    setCartItems(items);
    calculateTotalInCart(items);
  }, []);
  console.log(cartItems);
  const handleQuantityChange = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];

    if (newQuantity === 0 && updatedCartItems[index].quantity === 1) {
      return;
    }

    updatedCartItems[index].quantity = newQuantity;
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    calculateTotalInCart(updatedCartItems);
  };

  const calculateTotalInCart = (items) => {
    let total = 0;
    items.forEach((item) => {
      const totalPrice = item.totalPrice * item.quantity + item.comboPricing;
      total += totalPrice;
    });
    setTotalinCart(total);
  };

  const handleRemove = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    calculateTotalInCart(updatedCartItems);

    const totalQuantity = updatedCartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );

    localStorage.setItem("totalQuantity", totalQuantity);
  };
  const handleCheckout = async () => {
    validateName();
    validateEmail();
    validatePhone();
    if (isNameValid && isEmailValid && isPhoneValid) {
      const orderData = {
        customer_name: name,
        customer_email: email,
        customer_phone: Phone,
        total_price: totalinCart,
        totalQuantity: localStorage.getItem("totalQuantity"),
        products: cartItems.map((item) => ({
          ComboPricing: item.comboPricing,
          oldComboPricing: item.oldComboPricing,
          nameComboPricing: item.nameComboPricing,
          URL: item.ImgURL,
          rom: item.rom,
          ColorPick: item.ColorPick,
          product_name: item.detail,
          quantity: item.quantity,
          old_price_per_item: item.oldPrice,
          price_per_item: item.totalPrice,
          TotalinProduct: item.totalPrice * item.quantity + item.comboPricing,
        })),
      };
      const jsonString = JSON.stringify(orderData);

      try {
        const jsonString = JSON.stringify(orderData);
        console.log("JSON String: ", jsonString); // Ghi lại JSON string để kiểm tra

        const response = await fetch("http://localhost:3000/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: jsonString,
        });
        const data = response.json();
        console.log(data);
        toast.success("đặt hàng thành công!");

        // Xóa localStorage cũ
        localStorage.removeItem("cart");
        localStorage.removeItem("totalQuantity");

        // Thêm dữ liệu đơn hàng mới vào localStorage
        localStorage.setItem("orderData", jsonString);

        // Chuyển hướng về trang hiển thị đơn hàng đã đặt sau 2 giây
        setTimeout(() => {
          navigate("/dondadat");
        }, 2000);
      } catch (error) {
        console.error("Lỗi:", error);
        toast.error("Có lỗi xảy ra khi thêm đơn hàng.");
      }
    } else {
      console.log("Vui lòng điền đầy đủ thông tin và đúng định dạng");
      toast.error("Vui lòng điền đầy đủ thông tin và đúng định dạng");
    }
  };

  const validateName = () => {
    setIsNameValid(name.trim() !== "");
  };
  const validatePhone = () => {
    setIsPhoneValid(Phone.trim() !== "");
  };

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailPattern.test(email));
  };
  console.log(cartItems);
  return (
    <div className=" bg-[#e5e7eb] pb-12 shadow-[0_1px_4px_rgba(10,10,10,.15)]">
      <ToastContainer />

      <div className="container py-5 px-[7] mx-auto sm:container md:container">
        <ol className="breadcrumb py-[6px] px-0 list-none mb-[8px] flex flex-col gap-8 justify-start items-start">
          <li className="breadcrumb-item h-5 text-[#0664f9] text-[14px] leading-5 ">
            <Link to="/">
              <button>{"<"} Tiếp tục mua sắm </button>
            </Link>
          </li>
          <li>
            <h1 className="text-xl font-semibold mb-4">
              Có {localStorage.getItem("totalQuantity")} sản phẩm trong giỏ hàng
            </h1>
          </li>
        </ol>
        {cartItems.length === 0 ? (
          <p>Giỏ hàng trống</p>
        ) : (
          <div className="">
            <div className="flex flex-col gap-4 rounded-xl">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl flex flex-col gap-2"
                >
                  <div className="flex gap-4 items-center">
                    <div className="border-gray-4 relative flex h-auto max-h-[64px] max-w-[64px] rounded-lg border bg-white p-1 md:max-h-[100px] md:max-w-[100px]">
                      <img
                        className="h-auto w-full min-w-[54px] object-cover md:min-w-[90px]"
                        src={`http://localhost:3000/assets/${item.ImgURL}`}
                        alt=""
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between gap-2 md:gap-6 ">
                        <h2 className="text-xl font-semibold">
                          {item.detail} {item.rom} {item.ColorPick}
                        </h2>
                        <button
                          className=""
                          onClick={() => handleRemove(index)}
                        >
                          <img
                            src="http://localhost:3000/assets/trash-can.png"
                            alt=""
                            className="w-4 h-4 object-cover"
                          />
                        </button>
                      </div>
                      <div className="mt-2 flex justify-between">
                        <div className="ant-space css-10ed4xt ant-space-horizontal ant-space-align-center">
                          <p>
                            Số lượng:{" "}
                            <button
                              onClick={() =>
                                handleQuantityChange(index, item.quantity - 1)
                              }
                              className="bg-[#f6f6f6] px-2 rounded-[4px] ml-2"
                            >
                              -
                            </button>
                            <span className="px-2">{item.quantity}</span>
                            <button
                              onClick={() =>
                                handleQuantityChange(index, item.quantity + 1)
                              }
                              className="bg-[#f6f6f6] px-2 rounded-[4px] mr-2"
                            >
                              +
                            </button>
                          </p>
                        </div>

                        <div className="flex flex-col items-end gap-[4px]">
                          <p className="text-blue-600 text-xl font-semibold">
                            {formatCash(item.totalPrice.toString())}đ
                          </p>
                          {item.oldPrice && (
                            <strike className="text-base font-normal text-right">
                              {" "}
                              {formatCash(item.oldPrice.toString())}đ
                            </strike>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cart-warranty-package_wrapper__6QRDa">
                    <p class="mb-2 md:mb-1 text-sm">Gói bảo hành</p>
                    <div className="cart-warranty-package_warrantyPackage__2zUN7 cart-warranty-package_active__IhLG9 undefined">
                      <div class="flex justify-between gap-2">
                        <p class="css-1c4fxto text-text-primary">
                          {item.nameComboPricing}
                        </p>
                      </div>
                      <div class="flex items-center gap-1">
                        <p class="text-[#cb1c22] text-base font-semibold">
                          {item.comboPricing === 0
                            ? " "
                            : formatCash(item.comboPricing.toString()) + "đ"}
                        </p>
                        <p class="text-base font-semibold text-[#657384]">
                          <del>
                            {" "}
                            {item.oldComboPricing === 0
                              ? " "
                              : formatCash(item.oldComboPricing.toString()) +
                                "đ"}
                          </del>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="line my-3"></div>
                  <div>
                    Tổng{" "}
                    {formatCash(
                      (
                        item.totalPrice * item.quantity +
                        item.comboPricing
                      ).toString()
                    ) + "đ"}
                  </div>
                </div>
              ))}
              <div className="cart-warranty-package_wrapper__6QRDa bg-white p-4 rounded-xl flex flex-col gap-2">
                <p class="mb-2 md:mb-1 text-sm">Tổng giá trị</p>
                <div className="cart-warranty-package_warrantyPackage__2zUN7 cart-warranty-package_active__IhLG9 undefined">
                  <div class="flex justify-between gap-2">
                    <p class="css-1c4fxto text-text-primary text-[#cb1c22] text-base font-semibold">
                      {formatCash(totalinCart.toString()) + "đ"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-[0px 1px 4px rgba(10, 10, 10, 0.15)]">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-blue-600">
                    Thông tin người đặt
                  </h2>
                </div>
                <div className="flex flex-col flex-shrink-0">
                  <div className="flex gap-4 flex-shrink justify-stretch">
                    <div className="flex items-center flex-1 input-field relative">
                      <input
                        type="text"
                        name="name"
                        placeholder="Nhập họ và tên"
                        maxLength={60}
                        className={`flex-grow px-6 py-4 border ${
                          isNameValid ? "border-gray-300" : "border-red-500"
                        } rounded-md outline-none focus:border-blue-500`}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={validateName}
                      />
                      {!isNameValid && (
                        <p className="absolute top-full left-0 text-red-500 text-sm mt-1 ml-2">
                          Tên không được để trống
                        </p>
                      )}
                    </div>
                    <div className="flex items-center flex-1 input-field relative">
                      <input
                        type="text"
                        maxLength={10}
                        name="phone"
                        placeholder="Nhập số điện thoại"
                        className={`w-full px-6 py-4 border ${
                          isPhoneValid ? "border-gray-300" : "border-red-500"
                        } rounded-md outline-none focus:border-blue-500`}
                        value={Phone}
                        onChange={(e) => setPhone(e.target.value)}
                        onBlur={validatePhone}
                      />
                      {!isPhoneValid && (
                        <p className="absolute top-full left-0 text-red-500 text-sm mt-1 ml-2">
                          Số điện thoại không được để trống
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-6 input-field relative">
                    <input
                      type="text"
                      name="email"
                      placeholder="Nhập email (không bắt buộc)"
                      className={`w-full px-6 py-4 border ${
                        isEmailValid ? "border-gray-300" : "border-red-500"
                      } rounded-md outline-none focus:border-blue-500`}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={validateEmail}
                    />
                    {!isEmailValid && (
                      <p className="absolute top-full left-0 text-red-500 text-sm mt-1 ml-2">
                        Email không hợp lệ
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={handleCheckout}
              >
                Hoàn tất đặt hàng
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
