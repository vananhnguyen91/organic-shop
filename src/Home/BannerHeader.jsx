import React from "react";
import "../resources/scss/header.scss";
import { Button } from "antd";
import mingcute_refresh from "../resources/icons/mingcute_refresh-3-line.svg";
import icons_codefresh from "../resources/icons/simple-icons_codefresh.svg";
import carbon_delivery from "../resources/icons/carbon_delivery-truck.svg";

export default function BannerHeader() {
  return (
    <div class="banner-top-container">
      <header class="header">
        <h1>
          <span className="text-primary highlight">Organic</span> Foods at your{" "}
          <span class="bold">Doorsteps</span>
        </h1>
        <div class="buttons">
          <Button class="btn btn-green">Start Shopping</Button>
          <Button class="btn btn-black">Join us</Button>
        </div>
        <div class="info">
          <div>
            <span>19K+</span> Variety of Products
          </div>
          <div>
            <span>9K+</span> Happy Customers
          </div>
          <div>
            <span>10+</span> Store Locations
          </div>
        </div>
      </header>
      <section class="features">
        <div class="feature feature-farm">
          <img src={mingcute_refresh} alt="mingcute_refresh" />
          <div>
            <h2>Fresh From Farm</h2>
            <span>consectetur adipiscing elit Sagittis sed ptibus</span>
          </div>
        </div>
        <div class="feature feature-organic">
          <img src={icons_codefresh} alt="icons_codefresh" />
          <div>
            <h2>100% Organic</h2>
            <span>consectetur adipiscing elit Sagittis sed ptibus</span>
          </div>
        </div>
        <div class="feature feature-delivery">
          <img src={carbon_delivery} alt="carbon_delivery" />
          <div>
            <h2>Free Delivery</h2>
            <span>consectetur adipiscing elit Sagittis sed ptibus</span>
          </div>
        </div>
      </section>
    </div>
  );
}
