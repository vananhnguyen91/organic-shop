import React from "react";
import "../resources/scss/signup.scss";
import icon_email from "../resources/icons/email.svg";

export default function Signup() {
  return (
    <div className="sign-up-container">
      <div className="inline-flex justify-center items-center">
        <div className="info py-9">
          <div className="title">
            Get 20% discount on <br />
            your first purchase
          </div>
          <div className="description">
            Just Sign Up & Register it now to become member.
          </div>
        </div>
        <div className="sign-up">
          <div className="email-info">
            <div>
              <img src={icon_email} alt="icon_email" />
            </div>
            <input placeholder="Email address" />
          </div>
          <button className="bg-primary">Subscribe now</button>
        </div>
      </div>
    </div>
  );
}
