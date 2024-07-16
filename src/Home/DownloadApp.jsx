import React from "react";
import app_store from "../resources/img/img-app-store.png";
import google_play from "../resources/img/img-google-play.png";
import banner_onlineapp from "../resources/img/banner-onlineapp.png";

export default function DownloadApp() {
  return (
    <div className="download-app-container text-center bg-green_100 w-full ">
      <div
        style={{ paddingTop: "56px" }}
        className="inline-flex justify-center xs:flex-col xs:px-5 items-center gap-[92px] xs:gap-5 text-left"
      >
        <div className="info flex flex-col items-start gap-5">
          <div className="title text-black_200 font-normal text-[32px] capitalize">
            Download Organic App
          </div>
          <div className="description text-[#555] font-open_sans text-[20px] font-normal leading-[225%] tracking-[0.6px]">
            Online Orders made easy, fast and reliable
          </div>
          <div className="flex gap-x-3.5">
            <div>
              <img src={google_play} alt="google_play" />
            </div>
            <div>
              <img src={app_store} alt="app_store" />
            </div>
          </div>
        </div>
        <div>
          <img src={banner_onlineapp} alt="app_store" />
        </div>
      </div>
    </div>
  );
}
