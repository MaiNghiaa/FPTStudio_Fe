import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { formatCash } from "../../../Utils/utils";

const Orders = () => {
  const [orderData, setOrderData] = useState(null);
  const navigate = useNavigate();
  const [dataState, setState] = useState();
  const [isOpenDetail, setisOpenDetail] = useState(false);
  useEffect(() => {
    const storedOrderData = JSON.parse(localStorage.getItem("orderData"));
    if (storedOrderData) {
      setOrderData(storedOrderData);
    } else {
    }
  }, []);

  useEffect(() => {
    if (orderData) {
      const { customer_name, customer_email, customer_phone } = orderData;

      fetch("http://localhost:3000/ordersbyId", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer_name,
          customer_email,
          customer_phone,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setState(data[0]);
        })
        .catch((error) => {
          console.error("Error fetching orders:", error);
        });
    }
  }, [orderData]);

  console.log(dataState);
  if (!orderData) {
    return (
      <div className="container py-5 px-[7] mx-auto sm:container md:container">
        <ol className="breadcrumb py-[6px] px-0 list-none mb-[8px] flex flex-col gap-8 justify-start items-start">
          <li className="breadcrumb-item h-5 text-[#0664f9] text-[14px] leading-5 ">
            <Link to="/">
              <button>{"<"} Tiếp tục mua sắm </button>
            </Link>
          </li>
          <li>
            <h1 className="text-xl font-semibold mb-4">Không có hóa đơn nào</h1>
          </li>
        </ol>
      </div>
    );
  }
  console.log(orderData.customer_name);

  return (
    <div className="bg-[#e5e7eb] pb-12 shadow-[0_1px_4px_rgba(10,10,10,.15)]">
      <div className="container py-5 px-[7] mx-auto sm:container md:container">
        <Link to="/" className="-5 text-[#0664f9] text-[14px] leading-5">
          Trang chu
        </Link>
        <h1 className="text-xl font-semibold mb-4">Thông tin đơn hàng</h1>
        <div className="bg-white p-4 rounded-t-xl flex flex-col gap-2">
          <div>
            <div className="flex items-center justify-start">
              <p className="pr-[73px]">
                <strong>Tên khách hàng:</strong> {orderData.customer_name}
              </p>
              <p className="pr-[100px]">
                <strong>Email:</strong> {orderData.customer_email}
              </p>
              <p>
                <strong>Số điện thoại:</strong> {orderData.customer_phone}
              </p>
            </div>
            <div className="flex items-center justify-start">
              <p className="pr-[100px]">
                <strong>Tổng giá:</strong>{" "}
                {formatCash(orderData.total_price.toString())}đ
              </p>
              <p>
                <strong>Tổng số lượng:</strong> {orderData.totalQuantity}
              </p>
            </div>
          </div>
          <div>Trạng thái: {dataState && dataState.status}</div>
        </div>
        {/* <h2 className="text-lg font-semibold mt-4">Sản phẩm:</h2> */}
        {isOpenDetail === true ? (
          <>
            <div className="bg-white rounded-b-xl">
              <div className="line content-[''] w-full bg-[#cccccc] border-[0.5px] border-[#cccccc]"></div>

              <div
                className="flex items-center justify-center text-blue-600 cursor-pointer"
                onClick={() => setisOpenDetail(false)}
              >
                đóng
              </div>
            </div>
            <ul>
              {orderData.length === 0 ? (
                <p>Giỏ hàng trống</p>
              ) : (
                <div className="">
                  <div className="flex flex-col gap-4 rounded-xl">
                    {orderData.products.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-xl flex flex-col gap-2"
                      >
                        <div className="flex gap-4 items-center">
                          <div className="border-gray-4 relative flex h-auto max-h-[64px] max-w-[64px] rounded-lg border bg-white p-1 md:max-h-[100px] md:max-w-[100px]">
                            <img
                              className="h-auto w-full min-w-[54px] object-cover md:min-w-[90px]"
                              src={`http://localhost:3000/assets/${item.URL}`}
                              alt=""
                            />
                          </div>
                          <div className="flex-1 flex flex-col">
                            <div className="flex justify-between gap-2 md:gap-6 ">
                              <h2 className="text-xl font-semibold">
                                {item.detail} {item.rom} {item.ColorPick}
                              </h2>
                            </div>
                            <div className="mt-2 flex justify-between">
                              <div className="ant-space css-10ed4xt ant-space-horizontal ant-space-align-center">
                                <p>
                                  Số lượng:{" "}
                                  <span className="">{item.quantity}</span>
                                </p>
                              </div>

                              <div className="flex flex-col items-end gap-[4px]">
                                <p className="text-blue-600 text-xl font-semibold">
                                  {formatCash(item.price_per_item.toString())}đ
                                </p>
                                {item.old_price_per_item && (
                                  <strike className="text-base font-normal text-right">
                                    {" "}
                                    {formatCash(
                                      item.old_price_per_item.toString()
                                    )}
                                    đ
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
                                {item.ComboPricing === 0
                                  ? " "
                                  : formatCash(item.ComboPricing.toString()) +
                                    "đ"}
                              </p>
                              <p class="text-base font-semibold text-[#657384]">
                                <del>
                                  {" "}
                                  {item.oldComboPricing === 0
                                    ? " "
                                    : formatCash(
                                        item.oldComboPricing.toString()
                                      ) + "đ"}
                                </del>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="line my-3"></div>
                        <div>
                          Tổng{" "}
                          {formatCash(item.TotalinProduct.toString()) + "đ"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </ul>
          </>
        ) : (
          <div className="rounded-b-xl bg-white">
            <div className="line content-[''] w-full bg-[#cccccc] border-[0.5px] border-[#cccccc]"></div>
            <div
              className="flex items-center justify-center text-blue-600 cursor-pointer"
              onClick={() => setisOpenDetail(true)}
            >
              xem thêm
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
