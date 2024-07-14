import React from "react";
import vector from "../resources/icons/Vector.svg";

export default function PopularCategories() {
  return (
    <div>
      <div>
        <div>Popular categories</div>
        <div>
          <span>View All Categories</span>
          <div>
            <img src={vector} className="vector" alt="vector" />
          </div>
        </div>
      </div>
    </div>
  );
}
