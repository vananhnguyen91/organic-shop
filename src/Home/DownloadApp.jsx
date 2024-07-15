import React from "react";
import app_store from "../resources/img/img-app-store.png";
import google_play from "../resources/img/img-google-play.png";
import banner_onlineapp from "../resources/img/banner-onlineapp.png";
import "../resources/scss/features.scss";

export default function DownloadApp() {
  return (
    <div className="download-app-container bg-green_DDF6D5 w-full ">
      <div
        style={{ paddingTop: "56px" }}
        className="inline-flex justify-center items-center"
      >
        <div className="info">
          <div className="title">Download Organic App</div>
          <div className="description">
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
