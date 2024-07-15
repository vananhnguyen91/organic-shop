import React from "react";
import post_thumb from "../resources/img/post_thumb.jpeg";
import uil_calender from "../resources/icons/uil_calender.svg";
import util_folder from "../resources/icons/uil_folder.svg";
import { Col, Row } from "antd";
import "../resources/scss/news.scss";

export default function News() {
  const data = [];
  for (let index = 0; index < 3; index++) {
    data.push(index);
  }
  return (
    <div className="news-section news-post">
      <div className="header">
        <div className="title">our latest articles</div>
        <button className="bg-primary">View all</button>
      </div>
      <div className="post-content-container ">
        {data.map((item) => {
          return (
            <div span={8} key={item} className="post-content">
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
                <div className="flex gap-5 calendar">
                  <div className="info">
                    <img src={uil_calender} alt="post_thumb" />
                    <div>12th Jan 2024</div>
                  </div>
                  <div className="info">
                    <img src={util_folder} alt="post_thumb" />
                    <div>Health</div>
                  </div>
                </div>
                <div className="title">
                  10 Crazy ways to minimize oil in your diet with numerous
                  health benefits
                </div>
                <div className="content">
                  consectetur adipi elit. Aliquet eleifend viverra enim
                  tincidunt donec quam. A in arcu, hendrerit neque dolor
                  morbi...
                </div>
                <div className="more">Read more</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
