import React from "react";
import arrow_right from "../resources/icons/arrow_right.svg";

export default function PopularCategories() {
  return (
    <div>
      <div>
        <div>Popular categories</div>
        <div>
          <span>View All Categories</span>
          <div>
            <img src={arrow_right} alt="arrow_right" />
          </div>
        </div>
      </div>
    </div>
  );
}
