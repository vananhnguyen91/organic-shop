import React from "react";
import HeaderContent from "./Home/Header";
import BannerHeader from "./Home/BannerHeader";
import PopularCategories from "./Home/PopularCategories";
import FreshlyArrived from "./Home/FreshlyArrived";
import BannerInContent from "./Home/BannerInContent";
import BestSellerProduct from "./Home/BestSellerProduct";
import ProductOnSell from "./Home/ProductOnSell";
import News from "./Home/News";
import DownloadApp from "./Home/DownloadApp";
import Features from "./Home/Features";
import Footer from "./Home/Footer";
import Signup from "./Home/Signup";
export default function Home() {
  return (
    <div>
      <div className="header-section">
        <HeaderContent />
        <BannerHeader />
      </div>
      <div className="body-section m-0 py-0 px-24 xs:px-4 flex flex-col justify-center items-center gap-10 xs:gap-5 bg-white">
        <PopularCategories />
        <FreshlyArrived />
        <BannerInContent />
        <BestSellerProduct />
        <ProductOnSell />
        <News />
        <Signup />
        <DownloadApp />
        <Features />
        <Footer />
      </div>
    </div>
  );
}
