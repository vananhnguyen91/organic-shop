import React from "react";
import app_store from "../resources/img/img-app-store.png";
import google_play from "../resources/img/img-google-play.png";

export default function DownloadApp() {
  return (
    <div>
      <div>
        <div>Download Organic App</div>
        <div>Online Orders made easy, fast and reliable</div>
        <div>
          <div>
            <img src={google_play} alt="google_play" />
          </div>
          <div>
            <img src={app_store} alt="app_store" />
          </div>
        </div>
      </div>
    </div>
  );
}
