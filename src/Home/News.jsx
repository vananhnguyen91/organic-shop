import React from "react";
import post_thumb from "../resources/img/post_thumb.jpeg";
import uil_calender from "../resources/icons/uil_calender.svg";
import util_folder from "../resources/icons/uil_folder.svg";

export default function News() {
  const data = [];
  for (let index = 0; index < 8; index++) {
    data.push(index);
  }
  return (
    <div className="news-section news-post">
      <div className="header flex py-7 px-2.5 xs:justify-start justify-between xs:flex-col xs:items-start items-center w-full xs:gap-5">
        <div className="text-nowrap  text-black_200 text-[32px] font-normal capitalize">
          our latest articles
        </div>
        <div className="flex xs:justify-between xs:w-full justify-end items-center xs:gap-2 gap-10">
          <div></div>
          <div className="xs:flex xs:justify-between">
            <button className="bg-primary xs:mr-2 mr-[13.85px] text-white_100 py-[15px] px-5 items-center rounded-[10px] text-base	 leading-[100%] tracking-[1.12px] uppercase">
              View all
            </button>
          </div>
        </div>
      </div>
      <div className="flex xs:flex-col xs:justify-between flex-row justify-start items-center xs:gap-2.5 gap-5 flex-wrap mt-5 w-full ">
        {data.map((item) => {
          return (
            <div
              key={item}
              className="post-content basis-[32%] border border-solid border-[#D3D3D3]"
            >
              <div className="h-60">
                <img
                  src={post_thumb}
                  alt="post_thumb"
                  className="h-full w-full"
                />
              </div>
              <div
                className="flex flex-col gap-2.5 px-7 my-7"
                style={{ height: "calc(100%-240px)" }}
              >
                <div className="flex gap-5 text-[#828282] font-roboto text-[16px] font-normal leading-[221%] tracking-[0.32px] capitalize items-start">
                  <div className="flex justify-center items-center gap-2">
                    <img src={uil_calender} alt="post_thumb" />
                    <div>12th Jan 2024</div>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <img src={util_folder} alt="post_thumb" />
                    <div>Health</div>
                  </div>
                </div>
                <div className="text-black_300 text-[21px] font-semibold leading-[140%] capitalize ">
                  10 Crazy ways to minimize oil in your diet with numerous
                  health benefits
                </div>
                <div className="text-[#747474] font-roboto text-[17px] font-normal leading-[150%] tracking-[0.34px]">
                  consectetur adipi elit. Aliquet eleifend viverra enim
                  tincidunt donec quam. A in arcu, hendrerit neque dolor
                  morbi...
                </div>
                <div className=" relative w-fit text-black text-[15px] uppercase font-semibold leading-[120%] after:absolute after:mt-[5px] after:w-full after:content-[''] after:block after:border-b-[3px] after:border-solid after:border-black">
                  Read more
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
