import React from "react";
import arcticons_aftership from "../resources/icons/arcticons_aftership.svg";
import "../resources/scss/features.scss";

export default function Features() {
  const data = [];
  for (let index = 0; index < 5; index++) {
    data.push(index);
  }
  return (

      <div className="feature-container flex justify-between gap-y-5">
        {data.map((item) => {
          return (
            <div className="feature-item" key={item}>
              <div>
                <img src={arcticons_aftership} alt="arcticons_aftership" />
              </div>
              <div className="label">Free delivery</div>
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipi elit.
              </div>
            </div>
          );
        })}
      </div>

  );
}
