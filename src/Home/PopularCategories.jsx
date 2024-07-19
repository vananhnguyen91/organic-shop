import React, { useState } from "react";
import "../resources/scss/content.scss";
import product_item from "../resources/img/product_thumb.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function PopularCategories() {
  let carouselRef = null;
  const data = [];
  for (let index = 1; index < 16; index++) {
    data.push(index);
  }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="popular-categories-section w-full">
      <div className="product-header flex py-7 px-2.5 xs:justify-start justify-between xs:flex-col xs:items-start items-center w-full xs:gap-2.5">
        <div className="text-nowrap text-black_200 xs:text-2xl text-[32px] font-normal capitalize">
          Popular categories
        </div>
        <div className="flex xs:justify-between xs:w-full justify-end items-center xs:gap-2 gap-10">
          <div className="flex xs:justify-end justify-start items-center xs:gap-0 gap-8">
            <span className="text-base font-semibold capitalize text-[#787878] text-nowrap font-['Open_Sans']">
              View All Categories
            </span>
            <FontAwesomeIcon
              icon={faArrowRight}
              size="xs"
              className="text-[#787878] ml-2"
            />
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
      </div>
      <Carousel
        responsive={responsive}
        arrows={false}
        infinite={true}
        ref={(el) => (carouselRef = el)}
        className="flex items-center justify-between w-full"
      >
        {data.map((item) => {
          return (
            <div
              className="flex flex-col gap-5 justify-center items-center"
              key={item}
            >
              <div
                className="w-[160px] xs:w-[120px] aspect-square rounded-full "
                style={{
                  background: `url(${product_item}) lightgray 50% / cover no-repeat`,
                }}
              />
              <p className=" text-black_200 font-base font-normal tracking-[0.32px] capitalize">
                Fruits & Veges
              </p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
