import React from "react";

const ProductSpecs = ({ DetailItem }) => {
  return (
    <div className="detail__properties py-12 px-0">
      <div className="halfsm:px-[10px] w-full max-w-[1200px] px-[12px] mx-auto ">
        <div className="properties__detail">
          <div className="properties">
            <div className="halfsm:px-[10px] w-full max-w-[1200px] px-[12px] mx-auto ">
              <div className="flex flex-wrap justify-center mx-[calc(24px/-2)]">
                {DetailItem && DetailItem.DataCard ? (
                  DetailItem.DataCard.map((Items, index) => {
                    return (
                      <div
                        className="flex-[0_0_50%] max-w-[50%] md:flex-[0_0_100%] md:max-w-full"
                        key={index}
                      >
                        {DetailItem.category === "iphone" ||
                        DetailItem.category === "Ipad" ||
                        DetailItem.category === "Mac" ? (
                          <div className="properties__detail">
                            <div className="h4 text-[32px] leading-[40px] font-medium mb-4">
                              Thông số kĩ thuật
                            </div>
                            <div
                              key={index}
                              className="block rounded-md shadow-[0_1px_4px_rgba(10,10,10,.15)] overflow-hidden"
                            >
                              <div className="card-body pt-5 px-5">
                                <table className="table border-collapse w-full bg-[#fff]">
                                  <thead></thead>
                                  <tbody key={index}>
                                    <tr className="bg-[#f8f9fa]">
                                      <td className="w-[140px] border-[1px] border-solid border-[#edeeef] text-[#99a2aa] py-[10px] px-[16px] min-w-[124px]">
                                        màn hình{" "}
                                      </td>
                                      <td className="min-w-[124px] text-[#444b52] py-[10px] px-4 border-[1px] border-solid border-[#edeeef]">
                                        {Items.screen}
                                      </td>
                                    </tr>
                                    <tr className="bg-[#f8f9fa]">
                                      <td className="w-[140px] border-[1px] border-solid border-[#edeeef] text-[#99a2aa] py-[10px] px-[16px] min-w-[124px]">
                                        Camera sau
                                      </td>
                                      <td className="min-w-[124px] text-[#444b52] py-[10px] px-4 border-[1px] border-solid border-[#edeeef]">
                                        {Items.camera_sau}
                                      </td>
                                    </tr>
                                    <tr className="bg-[#f8f9fa]">
                                      <td className="w-[140px] border-[1px] border-solid border-[#edeeef] text-[#99a2aa] py-[10px] px-[16px] min-w-[124px]">
                                        Camera selfie
                                      </td>
                                      <td className="min-w-[124px] text-[#444b52] py-[10px] px-4 border-[1px] border-solid border-[#edeeef]">
                                        {Items.camera_selfie}
                                      </td>
                                    </tr>
                                    <tr className="bg-[#f8f9fa]">
                                      <td className="w-[140px] border-[1px] border-solid border-[#edeeef] text-[#99a2aa] py-[10px] px-[16px] min-w-[124px]">
                                        RAM
                                      </td>
                                      <td className="min-w-[124px] text-[#444b52] py-[10px] px-4 border-[1px] border-solid border-[#edeeef]">
                                        {Items.Ram}
                                      </td>
                                    </tr>
                                    <tr className="bg-[#f8f9fa]">
                                      <td className="w-[140px] border-[1px] border-solid border-[#edeeef] text-[#99a2aa] py-[10px] px-[16px] min-w-[124px]">
                                        CPU
                                      </td>
                                      <td className="min-w-[124px] text-[#444b52] py-[10px] px-4 border-[1px] border-solid border-[#edeeef]">
                                        {Items.CPU}
                                      </td>
                                    </tr>
                                    <tr className="bg-[#f8f9fa]">
                                      <td className="w-[140px] border-[1px] border-solid border-[#edeeef] text-[#99a2aa] py-[10px] px-[16px] min-w-[124px]">
                                        Dung Lượng pin
                                      </td>
                                      <td className="min-w-[124px] text-[#444b52] py-[10px] px-4 border-[1px] border-solid border-[#edeeef]">
                                        {Items.DungLuongPin}
                                      </td>
                                    </tr>
                                    <tr className="bg-[#f8f9fa]">
                                      <td className="w-[140px] border-[1px] border-solid border-[#edeeef] text-[#99a2aa] py-[10px] px-[16px] min-w-[124px]">
                                        Thẻ Sim
                                      </td>
                                      <td className="min-w-[124px] text-[#444b52] py-[10px] px-4 border-[1px] border-solid border-[#edeeef]">
                                        {Items.TheSim}
                                      </td>
                                    </tr>
                                    <tr className="bg-[#f8f9fa]">
                                      <td className="w-[140px] border-[1px] border-solid border-[#edeeef] text-[#99a2aa] py-[10px] px-[16px] min-w-[124px]">
                                        Hệ điều hành
                                      </td>
                                      <td className="min-w-[124px] text-[#444b52] py-[10px] px-4 border-[1px] border-solid border-[#edeeef]">
                                        {Items.HĐH}
                                      </td>
                                    </tr>
                                    <tr className="bg-[#f8f9fa]">
                                      <td className="w-[140px] border-[1px] border-solid border-[#edeeef] text-[#99a2aa] py-[10px] px-[16px] min-w-[124px]">
                                        Xuất xứ
                                      </td>
                                      <td className="min-w-[124px] text-[#444b52] py-[10px] px-4 border-[1px] border-solid border-[#edeeef]">
                                        {Items.XuatXu}
                                      </td>
                                    </tr>
                                    <tr className="bg-[#f8f9fa]">
                                      <td className="w-[140px] border-[1px] border-solid border-[#edeeef] text-[#99a2aa] py-[10px] px-[16px] min-w-[124px]">
                                        Thời gian ra mắt
                                      </td>
                                      <td className="min-w-[124px] text-[#444b52] py-[10px] px-4 border-[1px] border-solid border-[#edeeef]">
                                        {Items.Thoigianramat}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <div className="trigger py-4 px-0 text-center">
                                  {" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : DetailItem.category === "Apple_Watch" ? (
                          // Render content for accessories
                          <div className="properties__detail">
                            <div className="h4 text-[32px] leading-[40px] font-medium mb-4">
                              Thông số kĩ thuật
                            </div>
                            <div className="block rounded-md shadow-[0_1px_4px_rgba(10,10,10,.15)] overflow-hidden">
                              <div className="card-body pt-5 px-5">
                                <table className="table border-collapse w-full bg-[#fff]">
                                  <thead></thead>
                                  <tbody>
                                    <tr className="bg-[#f8f9fa]">
                                      <td className="w-[140px] border-[1px] border-solid border-[#edeeef] text-[#99a2aa] py-[10px] px-[16px] min-w-[124px]">
                                        Màn hình
                                      </td>
                                      <td className="min-w-[124px] text-[#444b52] py-[10px] px-4 border-[1px] border-solid border-[#edeeef]">
                                        {Items.screen}
                                      </td>
                                    </tr>
                                    <tr className="bg-[#f8f9fa]">
                                      <td className="w-[140px] border-[1px] border-solid border-[#edeeef] text-[#99a2aa] py-[10px] px-[16px] min-w-[124px]">
                                        Dung Lượng pin
                                      </td>
                                      <td className="min-w-[124px] text-[#444b52] py-[10px] px-4 border-[1px] border-solid border-[#edeeef]">
                                        {Items.DungLuongPin}
                                      </td>
                                    </tr>
                                    <tr className="bg-[#f8f9fa]">
                                      <td className="w-[140px] border-[1px] border-solid border-[#edeeef] text-[#99a2aa] py-[10px] px-[16px] min-w-[124px]">
                                        Hệ điều hành
                                      </td>
                                      <td className="min-w-[124px] text-[#444b52] py-[10px] px-4 border-[1px] border-solid border-[#edeeef]">
                                        {Items.HĐH}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <div className="trigger py-4 px-0 text-center">
                                  {" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : DetailItem.category === "Apple_Watch" ? (
                          // Render content for accessories
                          <div className="properties__detail">
                            <div className="h4 text-[32px] leading-[40px] font-medium mb-4">
                              Thông số kĩ thuật
                            </div>
                            <div className="block rounded-md shadow-[0_1px_4px_rgba(10,10,10,.15)] overflow-hidden">
                              <div className="card-body pt-5 px-5">
                                <table className="table border-collapse w-full bg-[#fff]">
                                  <thead></thead>
                                  <tbody>
                                    <tr className="bg-[#f8f9fa]">
                                      <td className="w-[140px] border-[1px] border-solid border-[#edeeef] text-[#99a2aa] py-[10px] px-[16px] min-w-[124px]">
                                        Màn hình
                                      </td>
                                      <td className="min-w-[124px] text-[#444b52] py-[10px] px-4 border-[1px] border-solid border-[#edeeef]">
                                        {Items.screen}
                                      </td>
                                    </tr>
                                    <tr className="bg-[#f8f9fa]">
                                      <td className="w-[140px] border-[1px] border-solid border-[#edeeef] text-[#99a2aa] py-[10px] px-[16px] min-w-[124px]">
                                        Dung Lượng pin
                                      </td>
                                      <td className="min-w-[124px] text-[#444b52] py-[10px] px-4 border-[1px] border-solid border-[#edeeef]">
                                        {Items.DungLuongPin}
                                      </td>
                                    </tr>
                                    <tr className="bg-[#f8f9fa]">
                                      <td className="w-[140px] border-[1px] border-solid border-[#edeeef] text-[#99a2aa] py-[10px] px-[16px] min-w-[124px]">
                                        Hệ điều hành
                                      </td>
                                      <td className="min-w-[124px] text-[#444b52] py-[10px] px-4 border-[1px] border-solid border-[#edeeef]">
                                        {Items.HĐH}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <div className="trigger py-4 px-0 text-center">
                                  {" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : DetailItem.category === "phu-kien" ? (
                          " "
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductSpecs;
