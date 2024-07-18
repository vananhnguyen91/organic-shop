import { Input } from "antd";
import React from "react";
import "../resources/scss/footer.scss";
import logo_header from "../resources/icons/logo_header.svg";
import icons_leaf from "../resources/img/akar-icons_leaf.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faPinterest,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
const { Search } = Input;

export default function Footer() {
  const listSocials = [
    { icon: faFacebookF, name: "facebook", link: "https://www.facebook.com/" },
    { icon: faTwitter, name: "twitter", link: "https://www.twitter.com/" },
    {
      icon: faPinterest,
      name: "pinterest",
      link: "https://www.pinterest.com/",
    },
    {
      icon: faInstagram,
      name: "instagram",
      link: "https://www.instagram.com/",
    },
    { icon: faYoutube, name: "youtube", link: "https://www.youtube.com/" },
  ];
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
          <ul className="social-name flex justify-center gap-[13.12px] py-0 px-[45px]">
            {listSocials.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex justify-center bg-white rounded-sm border border-solid border-[#efefef] shadow-social_item w-[42px] h-[45px] items-center text-gray-300 hover:bg-slate-50 hover:text-gray-950"
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full h-full flex justify-center items-center"
                  >
                    <FontAwesomeIcon icon={item.icon} alt={item.name} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="ouick_links flex flex-col items-start gap-5 text-xl font-semibold capitalize">
          <div>ouick links</div>
          <ul className="text-gray-500 text-base font-normal leading-[214%] tracking-[0.32px] hover:*:text-gray-700">
            <li>
              <a href="#about_us" target="_blank">
                About us
              </a>
            </li>
            <li>
              <a href="#home" target="_blank">
                Home
              </a>
            </li>
            <li>
              <a href="#offers" target="_blank">
                Offers
              </a>
            </li>
            <li>
              <a href="#services" target="_blank">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" target="_blank">
                Contact
              </a>
            </li>
            <li>
              <a href="#us" target="_blank">
                us
              </a>
            </li>
          </ul>
        </div>
        <div className="about flex flex-col items-start gap-5 text-xl font-semibold capitalize ">
          <div>About</div>
          <ul className="text-gray-500 text-base font-normal leading-[214%] tracking-[0.32px] hover:*:text-gray-700">
            <li>
              <a href="#our_packages" target="_blank">
                our packages
              </a>
            </li>
            <li>
              <a href="#how_it_work" target="_blank">
                How it work
              </a>
            </li>
            <li>
              <a href="#promotions" target="_blank">
                promotions
              </a>
            </li>
            <li>
              <a href="#refer_a_friend" target="_blank">
                refer a friend
              </a>
            </li>
          </ul>
        </div>
        <div className="help-centre flex flex-col items-start gap-5 text-xl font-semibold capitalize ">
          <div>Help Centre</div>
          <ul className="text-gray-500 text-base font-normal leading-[214%] tracking-[0.32px] hover:*:text-gray-700">
            <li>
              <a href="#shipping" target="_blank">
                Shipping
              </a>
            </li>
            <li>
              <a href="#payments" target="_blank">
                Payments
              </a>
            </li>
            <li>
              <a href="#product_returns" target="_blank">
                Product returns
              </a>
            </li>
            <li>
              <a href="#FAQs" target="_blank">
                FAQs
              </a>
            </li>
            <li>
              <a href="#checkout" target="_blank">
                Checkout
              </a>
            </li>
            <li>
              <a href="#other_issues" target="_blank">
                other Issues
              </a>
            </li>
          </ul>
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
