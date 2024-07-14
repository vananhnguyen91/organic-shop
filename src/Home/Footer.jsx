import { Input } from "antd";
import React from "react";
import "../resources/scss/footer.scss";
import logo_footer from "../resources/img/logo.png";
import icons_leaf from "../resources/img/akar-icons_leaf.png";

const { Search } = Input;

export default function Footer() {
  return (
    <>
      <div className="footer-looking-for">
        <p>People are also looking for</p>
        <div className="looking-for-info">
          <span>Blue diamon almonds</span>
          <span>Angie’s Boomchickapop Corn</span>
          <span>Salty kettle Corn</span>
          <span>Chobani Greek Yogurt</span>
          <span>Sweet Vanilla Yogurt</span>
          <span>Foster Farms Takeout Crispy wings</span>
          <span>Warrior Blend Organic</span>
          <span>Encore Seafoods Stuffed Alaskan Salmon</span>
          <span>Chao Cheese Creamy</span>
          <span>Chicken meatballs</span>
          <span>Werther’s caramel hard candies</span>
          <span>Mate coffee creamer</span>
          <span>Pasture raised chicken eggs</span>
          <span>Tree top fruit water</span>
          <span>Natural Vanilla Light Roast Coffee</span>
          <span>Sweet Vanilla essence Yogurt</span>
        </div>
      </div>
      <div className="footer-info">
        <div className="social-channel">
          <div className="logo">
            <img src={logo_footer} alt="logo_footer" />
            <img src={icons_leaf} alt="icons_leaf" />
          </div>
        </div>
        <div className="quick_links">
          <div>ouick links</div>
          <div>
            <div>Home</div>
            <div>About us</div>
            <div>Offers</div>
            <div>Services</div>
            <div>Contact</div>
            <div>us</div>
          </div>
        </div>
        <div className="quick_links">
          <div>About</div>
          <div>
            <div>How it work</div>
            <div>our packages</div>
            <div>promotions</div>
            <div>refer a friend</div>
          </div>
        </div>
        <div className="quick_links">
          <div>Help Centre</div>
          <div>
            <div>Payments</div>
            <div>Shipping</div>
            <div>Product returns</div>
            <div>FAQs</div>
            <div>Checkout</div>
            <div>other Issues</div>
          </div>
        </div>
        <div className="our-newsletter">
          <div>Our newsletter </div>
          <div className="subscribe">
            Subscribe to our newsletter to get <br /> updates about our grand
            offers.
          </div>
          <div className="send-email">
            <Search
              placeholder="Enter your email-address"
              allowClear
              enterButton="Search"
              size="large"
            />
          </div>
        </div>
      </div>
    </>
  );
}
