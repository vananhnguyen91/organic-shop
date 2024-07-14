import { Input } from "antd";
import React from "react";

const { Search } = Input;

export default function Footer() {
  return (
    <div className="">
      <div>
        <p>People are also looking for</p>
        <div className="flex flex-wrap items-center">
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
      <div className="flex justify-between	">
        <div>
          <span>Logo</span>
          <div className="flex "></div>
        </div>
        <div>
          <div>ouick links</div>
          <div>Home</div>
          <div>About us</div>
          <div>Offers</div>
          <div>Services</div>
          <div>Contact</div>
          <div>us</div>
        </div>
        <div>
          <div>About</div>
          <div>How it work</div>
          <div>our packages</div>
          <div>promotions</div>
          <div>refer a friend</div>
        </div>
        <div>
          <div>Help Centre</div>
          <div>Payments</div>
          <div>Shipping</div>
          <div>Product returns</div>
          <div>FAQs</div>
          <div>Checkout</div>
          <div>other Issues</div>
        </div>
        <div>
          <div>Our newsletter </div>
          <div>
            Subscribe to our newsletter to get updates about our grand offers.
          </div>
          <Search
            placeholder="Enter your email-address"
            allowClear
            enterButton="Search"
            size="large"
          />
        </div>
      </div>
    </div>
  );
}
