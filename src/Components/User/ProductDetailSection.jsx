import React from "react";

const ProductDetailSection = ({ headingData, descriptionData }) => {
  return (
    <div className="detail__post pt-[48px] px-0 pb-[64px] bg-[#fff] shadow-[0_1px_4px_rgba(10,10,10,.15)] relative z-[1]">
      <div className="contai halfsm:px-[10px] w-full max-w-[1200px] px-[12px] mx-auto ">
        <div className="row flex flex-wrap justify-center mr-[calc(24px/-2)] ml-[calc(24px/-2)]">
          <div className="col-9 p-0 flex-[0_0_75%] max-w-[75%]">
            <div className="content">
              {headingData &&
                headingData.map((Heading, index) => {
                  return (
                    <div key={index}>
                      <p style={{ textAlign: "justify", marginBottom: 11 }}>
                        <strong>{Heading.Heading_name}</strong>
                      </p>
                      <p style={{ marginBottom: 11, textAlign: "center" }}>
                        <b>
                          <img
                            alt=""
                            src={`http://localhost:3000/assets/${Heading.Image_heading}`}
                          />
                        </b>
                      </p>
                    </div>
                  );
                })}
              {descriptionData &&
                descriptionData.map((Desc, index) => {
                  return (
                    <div key={index}>
                      <h3 style={{ textAlign: "justify", marginBottom: 11 }}>
                        <b>{Desc.Title}</b>
                      </h3>
                      <p style={{ textAlign: "justify", marginBottom: 11 }}>
                        {Desc.Description}
                      </p>
                      <p style={{ marginBottom: 11, textAlign: "center" }}>
                        <img
                          alt="iPhone 15 Pro Max Khung titan cao cấp, nhẹ và bền bỉ"
                          src={`http://localhost:3000/assets/${Desc.Image}`}
                        />
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSection;
