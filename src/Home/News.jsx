import React from "react";
import post_thumb from "../resources/img/post_thumb.jpeg";
import uil_calender from "../resources/icons/uil_calender.svg";
import util_folder from "../resources/icons/uil_folder.svg";

export default function News() {
  const data = [];
  for (let index = 0; index < 2; index++) {
    data.push(index);
  }
  return (
    <div className="flex ">
      {data.map((item) => {
        return (
          <div className="flex" key={item}>
            <div>
              <img src={post_thumb} alt="post_thumb" />
            </div>
            <div>
              <div>
                <span>
                  <img src={uil_calender} alt="post_thumb" />
                  12th Jan 2024
                </span>
                <span>
                  <img src={util_folder} alt="post_thumb" />
                  Health
                </span>
              </div>
              <div>
                10 Crazy ways to minimize oil in your diet with numerous health
                benefits
              </div>
              <div>
                consectetur adipi elit. Aliquet eleifend viverra enim tincidunt
                donec quam. A in arcu, hendrerit neque dolor morbi...
              </div>
              <div>Read more</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
