import React, { useState } from "react";
import ProductItem from "./ProductItem";
import "../resources/scss/content.scss";

export default function FreshlyArrived() {
  const [hovered, setHovered] = useState(0);
  const toggleHover = (item, value) => setHovered(value ? item : 0);
  const data = [];
  for (let index = 1; index < 16; index++) {
    data.push(index);
  }
  return (
    <div className="freshly-arrived-section">
      <div className="product-header flex py-7 px-2.5 justify-between items-center w-full xs:gap-2.5">
        <div className="text-nowrap text-black_200 xs:text-2xl text-[32px] font-normal capitalize">
          Freshly arrived
        </div>
        <button className="bg-primary text-white_100 xs:p-2 p-5 text-center rounded-[10px] text-base xs:text-sm leading-[100%] tracking-[1.12px] uppercase">
          View all
        </button>
      </div>
      <div className="w-full relative flex flex-wrap">
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
      </div>
    </div>
  );
}
