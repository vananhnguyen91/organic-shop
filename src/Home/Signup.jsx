import React from "react";
import "../resources/scss/signup.scss";
import icon_email from "../resources/icons/email.svg";

export default function Signup() {
  return (
    <div className="sign-up-container flex w-full py-[60px] px-[200px] xs:py-[20px] xs:px-5  flex-col items-center justify-center gap-2.5 text-white">
      <div className="inline-flex  xs:flex-col justify-center items-center gap-[70px] xs:gap-5">
        <div className="info py-9 flex flex-col xs:items-center items-start gap-5">
          <div className="title text-[38px] font-medium leading-[110%] tracking-[-0.76px] capitalize">
            Get 20% discount on <br />
            your first purchase
          </div>
          <div className="description text-white font-open_sans text-[19px] font-normal leading-[225%]">
            Just Sign Up & Register it now to become member.
          </div>
        </div>
        <div className="sign-up flex flex-col items-start gap-[14px]">
          <div className="email-info border border-solid border-[#ECECEC] bg-white flex xs:w-full  w-[523px] py-2.5 px-5 items-center gap-[13px]">
            <div>
              <img src={icon_email} alt="icon_email" />
            </div>
            <input
              className="text-black_200 font-open_sans text-[16px] font-normal leading-[225%] tracking-[0.32px]"
              placeholder="Email address"
            />
          </div>
          <button className="flex justify-center py-[12px] px-[178px] xs:px-[40px] items-center gap-2.5 self-stretch text-center font-open_sans text-[16px] leading-[225%] tracking-[0.96px] uppercase bg-primary">
            Subscribe now
          </button>
        </div>
      </div>
    </div>
  );
}
