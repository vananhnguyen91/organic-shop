import { Input } from "antd";
import React from "react";
import "../resources/scss/footer.scss";
import logo_header from "../resources/icons/logo_header.svg";
import icons_leaf from "../resources/img/akar-icons_leaf.png";
import facebook from "../resources/icons/facebook.svg";
import twitter from "../resources/icons/twitter.svg";
import pinterest from "../resources/icons/pinterest.png";
import instagram from "../resources/icons/instagram.svg";
import youtube from "../resources/icons/youtube.svg";

const { Search } = Input;

export default function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-looking-for flex py-2.5 px-0 flex-col items-start gap-5">
        <div className=" text-black_200 text-[32px] font-normal capitalize">
          People are also looking for
        </div>
        <div className="looking-for-info mt-5 flex items-center self-stretch gap-[15px] flex-wrap">
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
      <div className="footer-info flex justify-between w-full pt-[60px] flex-wrap text-black_200 font-open_sans gap-10">
        <div className="social-channel xs:flex xs:flex-col xs:items-center">
          <div className="logo">
            <div className="flex justify-center items-center">
              <img src={logo_header} alt="logo_header" />
              <div className="text-shop">Organic</div>
            </div>
            <div>
              <img src={icons_leaf} alt="icons_leaf" />
            </div>
          </div>
          <div className="social-name">
            <div className="facebook">
              <img src={facebook} alt="facebook" />
            </div>
            <div className="twitter">
              <img src={twitter} alt="twitter" />
            </div>
            <div className="pinterest">
              <img src={pinterest} alt="pinterest" />
            </div>
            <div className="intagram">
              <img src={instagram} alt="instagram" />
            </div>
            <div className="youtube">
              <img src={youtube} alt="youtube" />
            </div>
          </div>
        </div>
        <div className="ouick_links quick_links">
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
        <div className="about quick_links">
          <div>About</div>
          <div>
            <div>How it work</div>
            <div>our packages</div>
            <div>promotions</div>
            <div>refer a friend</div>
          </div>
        </div>
        <div className="help-centre quick_links">
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
    </div>
  );
}
