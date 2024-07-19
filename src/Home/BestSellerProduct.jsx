import React, { useState } from "react";
import ProductItem from "./ProductItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function BestSellerProduct() {
  const [hovered, setHovered] = useState(0);
  const toggleHover = (item, value) => setHovered(value ? item : 0);
  let carouselRef = null;
  const data = [];
  for (let index = 1; index < 16; index++) {
    data.push(index);
  }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2,
    },
  };
  return (
    <div className="best-seller-product-section w-full">
      <div className="product-header flex py-7 px-2.5 justify-between items-center w-full xs:gap-2.5">
        <div className="text-nowrap text-black_200 xs:text-2xl text-[32px] font-normal capitalize">
          Best selling products
        </div>

        <div className="xs:flex xs:justify-between h-[50px] xs:h-9">
          <button
            className="aspect-square hotive:xs:bg-primary xs:mr-2 mr-[13.85px] text-black_200 bg-lightgray_F1F1F1 xs:p-2.5 items-center rounded-[10px] text-base	leading-[100%] tracking-[1.12px] uppercase"
            onClick={() => carouselRef.previous()}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              size="xs"
              className="text-[#787878] hotive:xs:text-white"
            />
          </button>
          <button
            className="aspect-square hotive:xs:bg-primary text-black_200 bg-lightgray_F1F1F1 xs:p-2.5 items-center rounded-[10px] text-base leading-[100%] tracking-[1.12px] uppercase"
            onClick={() => carouselRef.next()}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              size="xs"
              className="text-[#787878] hotive:xs:text-white"
            />
          </button>
        </div>
      </div>
      <Carousel
        responsive={responsive}
        arrows={false}
        ref={(el) => (carouselRef = el)}
        className="flex items-center justify-between w-full"
      >
        {data.map((item) => {
          return (
            <ProductItem
              toggleHover={(value) => toggleHover(item, value)}
              hovered={hovered === item ? true : false}
              rateColor="#6BB252"
              key={item}
            />
          );
        })}
      </Carousel>
    </div>
  );
}
