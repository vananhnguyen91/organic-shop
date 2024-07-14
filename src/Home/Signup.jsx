import { Button, Input } from "antd";
import React from "react";
import "../resources/scss/signup.scss";

export default function Signup() {
  return (
    <div className="sign-up-container">
      <div>
        <div>
          Get 20% discount on your first purchase
          <div>Just Sign Up & Register it now to become member.</div>
        </div>
        <div>
          <Input placeholder="Email address" />
          <Button>Subscribe now</Button>
        </div>
      </div>
    </div>
  );
}
