import React from "react";
import arcticons_aftership from "../resources/icons/arcticons_aftership.svg";

export default function Features() {
  const data = [];
  for (let index = 0; index < 8; index++) {
    data.push(index);
  }
  return (
    <div className="feature-container flex justify-start  items-center">
      <div className="flex xs:flex-col justify-start items-center gap-2.5 flex-wrap mt-5">
        {data.map((item) => {
          return (
            <div
              className="feature-item basis-[calc(20%-10px)] flex py-5 px-[30px] flex-col justify-end items-start gap-2.5 self-stretch border border-solid border-[#D2D2D2] "
              key={item}
            >
              <div>
                <img src={arcticons_aftership} alt="arcticons_aftership" />
              </div>
              <div className="text-[21px] font-semibold leading-[119.682%] capitalize text-black_300">
                Free delivery
              </div>
              <div className="text-black_300 font-open_sans text-base font-normal leading-[150%] tracking-[0.32px] capitalize">
                Lorem ipsum dolor sit amet, consectetur adipi elit.
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
