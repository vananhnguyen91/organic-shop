import React, { useState } from "react";
import logo_header from "../resources/icons/logo_header.svg";
import gg_menu from "../resources/icons/gg_menu.svg";
import solar_cart from "../resources/icons/solar_cart-3-linear.svg";
import solar_bookmark from "../resources/icons/solar_bookmark-linear.svg";
import solar_user from "../resources/icons/solar_user-circle-linear.svg";
import close_thin from "../resources/icons/close_thin.svg";
import fruits_icon from "../resources/icons/fruits-menu.svg";
import { Drawer, Input } from "antd";
import "../resources/scss/header.scss";

const { Search } = Input;
export default function HeaderContent() {
  const [open, setOpen] = useState(false);
  const data = [];
  for (let index = 0; index < 10; index++) {
    data.push({
      icon: [4, 8].includes(index) ? "" : fruits_icon,
      name: [4, 8].includes(index)
        ? "water, juice, soda, and tea"
        : "Fruits and vegetables",
    });
  }
  return (
    <div className="header-container flex justify-between items-center h-[84px] bg-white">
      <div className="flex xs:justify-between xs:w-full justify-center items-center px-5">
        <div className="flex justify-center items-center">
          <img className="mr-1" src={logo_header} alt="logo_header" />
          <div className="ml-px text-black font_khand text-[40px] font-medium">
            Organic
          </div>
        </div>
        <div style={{ padding: "10px 17px" }} onClick={() => setOpen(true)}>
          <img src={gg_menu} alt="gg_menu" />
        </div>
      </div>
      <div className="input-search xs:hidden flex justify-center items-center w-[30%]">
        <Search
          placeholder="Search products"
          allowClear
          enterButton="Search"
          size="large"
        />
      </div>
      <div className="xs:hidden flex justify-center items-center uppercase gap-2.5">
        <div className="py-8 px-2.5 active:border-b-[3px] active:border-solid active:border-[#364127]">
          <a href="#">Home</a>
        </div>
        <div className="py-8 px-2.5 active:border-b-[3px] active:border-solid active:border-[#364127]">
          <a href="#">Sale</a>
        </div>
        <div className="py-8 px-2.5 active:border-b-[3px] active:border-solid active:border-[#364127]">
          <a href="#">Stores</a>
        </div>
        <div className="py-8 px-2.5 active:border-b-[3px] active:border-solid active:border-[#364127]">
          <a href="#">About</a>
        </div>
        <div className="py-8 px-2.5 active:border-b-[3px] active:border-solid active:border-[#364127]">
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="xs:hidden flex justify-center items-center self-stretch uppercase gap-2.5">
        <div className="p-5">
          <img src={solar_user} alt="solar_user" />
        </div>
        <div className="p-5">
          <img src={solar_bookmark} alt="solar_bookmark" />
        </div>
        <div className="p-5">
          <img src={solar_cart} alt="solar_cart" />
        </div>
      </div>

      <Drawer
        styles={{
          header: { padding: "43px 0 0 0", border: "none" },
          body: {
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "unset",
          },
        }}
        className="px-[31px] pb-[43px]"
        title={
          <div className="flex justify-between items-center py-2.5">
            <span className="text-lightgray_999 text-xs leading-[250%] uppercase tracking-[6px] font-normal">
              Menu
            </span>
            <div className="h-full" onClick={() => setOpen(false)}>
              <img src={close_thin} alt="close_thin" />
            </div>
          </div>
        }
        placement="left"
        closable={false}
        onClose={() => setOpen(false)}
        open={open}
      >
        {data.map((item) => {
          return (
            <div
              key={item}
              className="flex justify-start px-2.5 gap-2.5 border-b h-[43px] border-dashed border-custom-gray"
            >
              {item.icon && <img src={item.icon} alt={item.name} />}
              <div className="text-[#333] text-[17px] font-normal leading-[250%] capitalize">
                {item.name}
              </div>
            </div>
          );
        })}
      </Drawer>
    </div>
  );
}
