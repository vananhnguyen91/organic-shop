import React from "react";
import "../resources/scss/header.scss";
import mingcute_refresh from "../resources/icons/mingcute_refresh-3-line.svg";
import icons_codefresh from "../resources/icons/simple-icons_codefresh.svg";
import carbon_delivery from "../resources/icons/carbon_delivery-truck.svg";

export default function BannerHeader() {
  return (
    <div className="banner-top-container">
      <header className="header">
        <h1>
          <span className="text-primary highlight">Organic</span> Foods
          <br />
          at your <span className="bold">Doorsteps</span>
        </h1>
        <div className="buttons">
          <button className="btn-green">Start Shopping</button>
          <button>Join us</button>
        </div>
        <div className="info">
          <div>
            <div>19K+</div>
            <div>Variety of Products</div>
          </div>
          <div>
            <div>9K+</div> <div>Happy Customers</div>
          </div>
          <div>
            <div>10+</div> <div>Store Locations</div>
          </div>
        </div>
      </header>
      <section className="features">
        <div className="feature feature-farm">
          <img src={mingcute_refresh} alt="mingcute_refresh" />
          <div>
            <h2>Fresh From Farm</h2>
            <span>consectetur adipiscing elit Sagittis sed ptibus</span>
          </div>
        </div>
        <div className="feature feature-organic">
          <img src={icons_codefresh} alt="icons_codefresh" />
          <div>
            <h2>100% Organic</h2>
            <span>consectetur adipiscing elit Sagittis sed ptibus</span>
          </div>
        </div>
        <div className="feature feature-delivery">
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
