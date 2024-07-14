import React from "react";
import "../resources/scss/content.scss";
import { Col, Row } from "antd";
import banner_ad_1 from "../resources/img/banner-ad-1.jpeg";
import banner_ad_2 from "../resources/img/banner-ad-2.png";
import banner_ad_3 from "../resources/img/banner-ad-3.png";

export default function BannerInContent() {
  return (
    <Row
      style={{
        width: "100%",
        height: "560px",
        padding: "0 10px",
        gap: "30px",
        flexWrap: "nowrap",
      }}
      className="banner-in-content"
    >
      <Col
        span={14}
        className="ad-info"
        style={{
          background: `url(${banner_ad_1})  lightgray 0px -170px / 138.222% 222.143% no-repeat`,
        }}
      >
        <div className="flex flex-col gap-y-2.5">
          <div className="title_ad">Items on SALE</div>
          <div className="description">Discounts up to 30%</div>
          <div className="link">shop now</div>
        </div>
      </Col>
      <Col
        span={10}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          flexWrap: "nowrap",
          flex: "1 0",
        }}
      >
        <div
          className="ad-info"
          style={{
            height: "50%",
            background: `url(${banner_ad_2}) lightgray 50% / cover no-repeat`,
          }}
        >
          <div className="flex flex-col">
            <div className="title_ad">Combo offer</div>
            <div className="description">save up to 100%</div>
            <div className="link">shop now</div>
          </div>
        </div>
        <div
          className="ad-info"
          style={{
            height: "50%",
            background: `url(${banner_ad_3}) lightgray 0px -169.728px / 139.779% 177.565% no-repeat`,
          }}
        >
          <div className="flex flex-col">
            <div className="title_ad">Discount Coupons</div>
            <div className="description">Discounts up to 30%</div>
            <div className="link">shop now</div>
          </div>
        </div>
      </Col>
    </Row>
  );
}
