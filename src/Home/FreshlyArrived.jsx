import React, { useState } from "react";
import ProductItem from "./ProductItem";
import "../resources/scss/content.scss";
import { Row } from "antd";

export default function FreshlyArrived() {
  const [hovered, setHovered] = useState(0);
  const toggleHover = (item, value) => setHovered(value ? item : 0);
  const data = [];
  for (let index = 1; index < 16; index++) {
    data.push(index);
  }
  return (
    <div className="freshly-arrived-section">
      <div className="product-header flex py-7 px-2.5 xs:justify-start justify-between xs:flex-col xs:items-start items-center w-full xs:gap-5">
        <div className="text-nowrap  text-black_200 text-[32px] font-normal capitalize">
          Freshly arrived
        </div>
        <button className="bg-primary xs:mr-2 mr-[13.85px] text-white_100 py-[15px] px-5 items-center rounded-[10px] text-base	 leading-[100%] tracking-[1.12px] uppercase">
          View all
        </button>
      </div>
      <Row className="w-full" gutter={30}>
        {data.map((item) => {
          return (
            <ProductItem
              responsive={true}
              hovered={hovered === item ? true : false}
              toggleHover={(value) => toggleHover(item, value)}
              key={item}
            />
          );
        })}
      </Row>
    </div>
  );
}
