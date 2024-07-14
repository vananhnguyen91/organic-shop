import React from "react";
import "../resources/scss/banner_header.scss";
import { Button } from "antd";
import mingcute_refresh from "../resources/icons/mingcute_refresh-3-line.svg";
import icons_codefresh from "../resources/icons/simple-icons_codefresh.svg";
import carbon_delivery from "../resources/icons/carbon_delivery-truck.svg";

export default function BannerHeader() {
  return (
    <div className="banner_header_container">
      <div>Organic Foods at your Doorsteps</div>
      <Button>Start Shopping</Button>
      <Button>Join us</Button>
      <div>
        <div>19k+</div>
        <div>Variety of Products</div>
        <div>9k+</div>
        <div>Happy Customers</div>
        <div>10+</div>
        <div>Store Locations</div>
      </div>
      <div>
        <div>
          <img src={mingcute_refresh} className="App-logo" alt="icon_mnu" />
          <div>
            <p>Fresh from farm</p>
            <span>Consectetur adipiscing elit Sagittis sed ptibus</span>
          </div>
        </div>
        <div>
          <img src={icons_codefresh} className="App-logo" alt="icon_mnu" />
          <div>
            <p>100% Organic</p>
            <span>Consectetur adipiscing elit Sagittis sed ptibus</span>
          </div>
        </div>
        <div>
          <img src={carbon_delivery} className="App-logo" alt="icon_mnu" />
          <div>
            <p>Free delivery</p>
            <span>Consectetur adipiscing elit Sagittis sed ptibus</span>
          </div>
        </div>
      </div>
    </div>
  );
}
