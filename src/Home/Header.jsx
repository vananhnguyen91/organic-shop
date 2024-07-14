import React from "react";
import gg_menu from "../resources/icons/gg_menu.svg";
import solar_cart from "../resources/icons/solar_cart-3-linear.svg";
import solar_bookmark from "../resources/icons/solar_bookmark-linear.svg";
import solar_user from "../resources/icons/solar_user-circle-linear.svg";
import { Input } from "antd";

const { Search } = Input;
export default function HeaderContent() {
  return (
    <div>
      <div>
        <div>logo</div>
        <div>Organic</div>
        <div>
          <img src={gg_menu} className="App-logo" alt="icon_mnu" />
        </div>
      </div>
      <div>
        <Search
          placeholder="Search products"
          allowClear
          enterButton="Search"
          size="large"
        />
      </div>
      <div>
        <span>Home</span>
        <span>Sale</span>
        <span>Stores</span>
        <span>About</span>
        <span>Contact</span>
      </div>
      <div>
        <div>
          <img src={solar_user} alt="solar_user" />
        </div>
        <div>
          <img src={solar_bookmark} alt="solar_bookmark" />
        </div>
        <div>
          <img src={solar_cart} alt="solar_cart" />
        </div>
      </div>
    </div>
  );
}
