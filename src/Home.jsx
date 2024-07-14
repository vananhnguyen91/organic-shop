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
import { Layout } from "antd";
import Signup from "./Home/Signup";
const { Content } = Layout;
export default function Home() {
  return (
    <Layout>
      <div>
        <HeaderContent />
        <BannerHeader />
      </div>
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          backgroundColor: "#FFF",
        }}
      >
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
      </Content>
    </Layout>
  );
}
