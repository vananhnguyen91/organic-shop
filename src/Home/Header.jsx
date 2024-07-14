import React from "react";
import logo_header from "../resources/icons/logo_header.svg";
import gg_menu from "../resources/icons/gg_menu.svg";
import solar_cart from "../resources/icons/solar_cart-3-linear.svg";
import solar_bookmark from "../resources/icons/solar_bookmark-linear.svg";
import solar_user from "../resources/icons/solar_user-circle-linear.svg";
import { Input } from "antd";
import "../resources/scss/header.scss";

const { Search } = Input;
export default function HeaderContent() {
  return (
    <div className="flex justify-between items-center header-container">
      <div className="flex justify-center items-center header-shop-info">
        <div className="flex justify-center items-center">
          <img className="mr-1" src={logo_header} alt="logo_header" />
          <div className="ml-px text-shop">Organic</div>
        </div>
        <div style={{ padding: "10px 17px" }}>
          <img src={gg_menu} alt="gg_menu" />
        </div>
      </div>
      <div className="input-search">
        <Search
          placeholder="Search products"
          allowClear
          enterButton="Search"
          size="large"
        />
      </div>
      <div className="flex justify-center items-center self-stretch uppercase gap-2.5">
        <div className="p-5">
          <a href="#">Home</a>
        </div>
        <div className="p-5">
          <a href="#">Sale</a>
        </div>
        <div className="p-5">
          <a href="#">Stores</a>
        </div>
        <div className="p-5">
          <a href="#">About</a>
        </div>
        <div className="p-5">
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="flex justify-center items-center self-stretch uppercase gap-2.5">
        <div className="p-5">
          <img src={solar_user} alt="solar_user" />
        </div>
        <div className="p-5">
          <img src={solar_bookmark} alt="solar_bookmark" />
        </div>
        <div className="p-5">
          <img src={solar_cart} alt="solar_cart" />
        </div>
      </div>
    </div>
  );
}
