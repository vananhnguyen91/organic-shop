import React from "react";
import "../resources/scss/content.scss";
import { Col, Row } from "antd";
import banner_ad_1 from "../resources/img/banner_ad_1.jpg";
import banner_ad_2 from "../resources/img/banner_ad_2.png";
import banner_ad_3 from "../resources/img/banner_ad_3.png";

export default function BannerInContent() {
  const data = [
    {
      banner: banner_ad_1,
      title: "Items on SALE",
      description: "Discounts up to 30%",
      text_link: "shop now",
    },
    {
      banner: banner_ad_2,
      title: "Combo offer",
      description: "save up to 100%",
      text_link: "shop now",
    },
    {
      banner: banner_ad_3,
      title: "Discount Coupons",
      description: "Discounts up to 30%",
      text_link: "shop now",
    },
  ];
  return (
    <div className="banner-in-content flex xs:flex-col flex-row w-full py-0 px-2.5 gap-[30px] flex-nowrap">
      <div
        className="ad-info basis-[60%] flex items-center self-stretch text-white xs:py-[30px] gap-5 xs:px-5 py-[60px] px-10 text-[40px] leading-[140%] capitalize"
        style={{
          background: `url(${banner_ad_1}) lightgray 0px -170px / 138.222% 222.143% no-repeat`,
        }}
      >
        <div className="flex flex-col gap-y-2.5">
          <div className="title_ad">Items on SALE</div>
          <div className="description">Discounts up to 30%</div>
          <div className="link">shop now</div>
        </div>
        ;
      </div>
      <div className="flex flex-col basis-[40%] gap-[30px] flex-nowrap">
        <div
          className="ad-info h-[50%] flex items-center self-stretch text-white xs:py-[30px] gap-5 xs:px-5 py-[60px] px-10 text-[40px] leading-[140%] capitalize"
          style={{
            background: `url(${banner_ad_2}) lightgray 50% / cover no-repeat`,
          }}
        >
          <div className="flex flex-col gap-y-2.5">
            <div className="title_ad">Combo offer</div>
            <div className="description">save up to 100%</div>
            <div className="link">shop now</div>
          </div>
        </div>
        <div
          className="ad-info h-[50%] flex items-center self-stretch text-white xs:py-[30px] gap-5 xs:px-5 py-[60px] px-10 text-[40px] leading-[140%] capitalize"
          style={{
            background: `url(${banner_ad_3}) lightgray 0px -169.728px / 139.779% 177.565% no-repeat`,
          }}
        >
          <div className="flex flex-col gap-y-2.5">
            <div className="title_ad">Discount Coupons</div>
            <div className="description">Discounts up to 30%</div>
            <div className="link">shop now</div>
          </div>
        </div>
      </div>
    </div>
  );
}
