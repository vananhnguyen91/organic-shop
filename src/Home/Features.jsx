import React from "react";
import arcticons_aftership from "../resources/icons/arcticons_aftership.svg";

export default function Features() {
  const data = [];
  for (let index = 0; index < 5; index++) {
    data.push(index);
  }
  return (
    <div className="flex justify-between ">
      {data.map((item) => {
        return (
          <div className="" key={item}>
            <div>
              <img src={arcticons_aftership} alt="post_thumb" />
            </div>
            <div>Free delivery</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipi elit.</div>
          </div>
        );
      })}
    </div>
  );
}
