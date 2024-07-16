import React from "react";
import "../resources/scss/header.scss";
import mingcute_refresh from "../resources/icons/mingcute_refresh-3-line.svg";
import icons_codefresh from "../resources/icons/simple-icons_codefresh.svg";
import carbon_delivery from "../resources/icons/carbon_delivery-truck.svg";

export default function BannerHeader() {
  const data = [
    { value: "19K+", name: "Variety of Products" },
    { value: "9K+", name: "Happy Customers" },
    { value: "10+", name: "Store Locations" },
  ];
  const dataFeature = [
    {
      color: "orange_100",
      img: mingcute_refresh,
      name: "Fresh From Farm",
      description: "consectetur adipiscing elit Sagittis sed ptibus",
    },
    {
      color: "gray_100",
      img: icons_codefresh,
      name: "100% Organic",
      description: "consectetur adipiscing elit Sagittis sed ptibus",
    },
    {
      color: "primary",
      img: carbon_delivery,
      name: "Free Delivery",
      description: "consectetur adipiscing elit Sagittis sed ptibus",
    },
  ];
  return (
    <div className="banner-top-container flex flex-col xs:min-h-[700px]">
      <header className="xs:p-10 xs:pb-0 pl-[320px] pt-[200px] flex flex-col items-start gap-10">
        <h1 className="text-black xs:text-[35px] text-[69px] font-normal leading-[120%] tracking-[-2.07px]">
          <span className="text-primary font-bold tracking-[-2.07px]">
            Organic{" "}
          </span>
          Foods
          <br />
          at your{" "}
          <span className="font-bold tracking-[-2.07px]">Doorsteps</span>
        </h1>
        <div className="flex justify-between items-center gap-2.5">
          <button className="bg-primary py-5 px-10 justify-center items-center gap-2.5 rounded-[110px]  text-white text-center text-xl font-semibold  ">
            Start Shopping
          </button>
          <button className=" py-5 px-10 justify-center items-center gap-2.5 rounded-[110px] bg-black_100 text-white text-center text-xl font-semibold  ">
            Join us
          </button>
        </div>
        <div className="flex xs:justify-center items-start py-5 gap-5 text-black font-normal leading-[120%] uppercase">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex xs:flex-col items-center justify-between gap-2.5 max-w-[200px] xs:max-w-none"
              >
                <div className="first:text-black first:text-center first:text-[32px] first:font-bold first:leading-[120%]">
                  {item.value}
                </div>
                <div>{item.name}</div>
              </div>
            );
          })}
        </div>
      </header>
      <div className="hidden bg-gray_100 bg-orange_100 bg-primary"></div>
      <section className="my-0 mx-auto mt-auto flex xs:flex-col xs:w-full justify-center w-[64%]">
        {dataFeature.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex p-5 text-white items-start gap-5 bg-${item.color}`}
            >
              <img src={item.img} alt={item.name} />
              <div>
                <h2 className="font-inter text-[24px] font-semibold leading-[140%%] capitalize">
                  {item.name}
                </h2>
                <span className="font-open_sans text-[16px] font-normal leading-[160%] tracking-[0.48px] capitalize">
                  {item.description}
                </span>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
